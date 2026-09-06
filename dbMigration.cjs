const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
const env = fs.readFileSync('.env', 'utf8');
const urlMatch = env.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim());

async function migrate() {
  const { data: empresa } = await supabase.from('empresas').select('id').eq('slug', 'aventus').single();
  if(!empresa) return console.log('No empresa found');

  const { data: cats } = await supabase.from('categories').select('*').eq('empresa_id', empresa.id);
  
  const getCatId = (name) => cats.find(c => c.name === name)?.id;
  
  const idArabes = getCatId('Perfumes Árabes');
  const idDesodorantes = getCatId('Desodorantes Árabes');
  const idPelo = getCatId('Productos de Pelo');
  
  const idInspiraciones = getCatId('Perfumes Extractos');
  const idDecants = getCatId('Perfumes Tubitos');
  
  const toDelete = [
    getCatId('Perfumes Midoré'),
    getCatId('Perfumes ONLYYOU'),
    getCatId('Perfumes PLATA'),
    getCatId('Perfumes Miniaturas'),
    getCatId('Perfumes Miniaturas 50 ML')
  ].filter(id => id); // filter out undefined if already deleted

  // 1. Move products
  const moves = [
    { from: getCatId('Perfumes Midoré'), to: idInspiraciones },
    { from: getCatId('Perfumes ONLYYOU'), to: idInspiraciones },
    { from: getCatId('Perfumes PLATA'), to: idInspiraciones },
    { from: getCatId('Perfumes Miniaturas'), to: idDecants },
    { from: getCatId('Perfumes Miniaturas 50 ML'), to: idDecants }
  ];

  for (const move of moves) {
    if (move.from) {
      await supabase.from('products').update({ category_id: move.to }).eq('category_id', move.from);
      console.log(`Moved products from ${move.from} to ${move.to}`);
    }
  }
  
  // 2. Delete obsolete categories
  for (const id of toDelete) {
    await supabase.from('categories').delete().eq('id', id);
    console.log(`Deleted category ${id}`);
  }

  // 3. Rename surviving categories
  const renames = [
    { id: idArabes, name: 'Perfumes Árabes', icon: '🕌', description: 'Fragancias árabes premium' },
    { id: idInspiraciones, name: 'Inspiraciones & Extractos', icon: '💎', description: 'Esencias, Midoré, Only You y Plata' },
    { id: idDecants, name: 'Miniaturas & Decants', icon: '🍾', description: 'Perfumes de bolsillo y muestras' },
    { id: idDesodorantes, name: 'Desodorantes & Splash', icon: '💨', description: 'Cuidado personal' },
    { id: idPelo, name: 'Cuidado Capilar', icon: '💆', description: 'Productos para el cabello' }
  ];

  for (const r of renames) {
    if (r.id) {
      await supabase.from('categories').update({ name: r.name, icon: r.icon, description: r.description }).eq('id', r.id);
      console.log(`Updated category ${r.id} to ${r.name}`);
    }
  }
  
  console.log('Migration completed.');
}

migrate();
