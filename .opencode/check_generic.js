const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const env = fs.readFileSync('.env', 'utf8');
const urlMatch = env.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim());

async function run() {
  const GENERIC_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQieVoMuTlKhmL7Ke4lZYC07zq6IEwnJGCbk5Hj_RpodQ&s=10';
  
  const { data: allProds, error } = await supabase.from('products').select('*');
  if (error) {
    console.error(error);
    return;
  }
  
  const genericProds = allProds.filter(p => p.image_url === GENERIC_IMG || !p.image_url);
  console.log(`Total products with generic placeholder (${GENERIC_IMG}): ${genericProds.length}`);
  
  console.log('Sample of these products:');
  console.log(genericProds.slice(0, 20).map(p => `[${p.code}] ${p.name} (cat: ${p.category_id})`).join('\n'));

  // Also check defaultCatalog.ts to see if it's there
}

run();
