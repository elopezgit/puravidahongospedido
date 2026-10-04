const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const env = fs.readFileSync('.env', 'utf8');
const urlMatch = env.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim());

async function run() {
  const { data: empresas } = await supabase.from('empresas').select('*');
  console.log('Empresas:', empresas);

  const { data: aventus } = await supabase.from('empresas').select('*').eq('slug', 'aventus').single();
  if (!aventus) return console.log('Aventus empresa not found');

  const { data: aventusProds } = await supabase.from('products').select('*').eq('empresa_id', aventus.id);
  console.log('Total Aventus products:', aventusProds.length);

  const genericUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQieVoMuTlKhmL7Ke4lZYC07zq6IEwnJGCbk5Hj_RpodQ&s=10';
  const aventusGeneric = aventusProds.filter(p => p.image_url === genericUrl || !p.image_url || p.image_url.trim() === '');
  console.log('Aventus products with generic or empty image:', aventusGeneric.length);

  const sample = aventusGeneric.slice(0, 30).map(p => ({
    code: p.code,
    name: p.name,
    image_url: p.image_url
  }));
  console.log('Sample of aventus generic prods:', sample);
}

run();
