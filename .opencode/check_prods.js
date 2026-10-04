const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const env = fs.readFileSync('.env', 'utf8');
const urlMatch = env.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/);

const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim());

async function check() {
  const { data: prods, error } = await supabase.from('products').select('*');
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('Total products in Supabase:', prods.length);
  
  const target = prods.find(p => p.sku === 'AVN-0336' || (p.name && p.name.toLowerCase().includes('delicious')));
  console.log('Target AVN-0336:', JSON.stringify(target, null, 2));

  // Find all with generic images or specific gstatic urls
  const genericList = prods.filter(p => p.image_url && p.image_url.includes('encrypted-tbn0.gstatic.com'));
  console.log('Products with gstatic urls count:', genericList.length);
  
  const sample = genericList.slice(0, 15).map(p => ({
    sku: p.sku,
    name: p.name,
    image_url: p.image_url,
    description: p.description
  }));
  console.log('Sample of gstatic items:', JSON.stringify(sample, null, 2));
}

check();
