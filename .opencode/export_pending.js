const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const env = fs.readFileSync('.env', 'utf8');
const urlMatch = env.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim());

async function run() {
  const { data: aventus } = await supabase.from('empresas').select('*').eq('slug', 'aventus').single();
  const { data: products } = await supabase
    .from('products')
    .select('id, code, name, image_url, description, category_id')
    .eq('empresa_id', aventus.id)
    .order('code', { ascending: true });

  const GENERIC_IMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQieVoMuTlKhmL7Ke4lZYC07zq6IEwnJGCbk5Hj_RpodQ&s=10';

  const pendingProds = products.filter(p => !p.image_url || p.image_url.trim() === '' || p.image_url === GENERIC_IMG);
  
  console.log(`Total Aventus products: ${products.length}`);
  console.log(`Products pending real image: ${pendingProds.length}`);

  fs.writeFileSync(
    'pending_images_aventus.json',
    JSON.stringify(pendingProds, null, 2),
    'utf8'
  );
  console.log('Saved list to pending_images_aventus.json');
}

run();
