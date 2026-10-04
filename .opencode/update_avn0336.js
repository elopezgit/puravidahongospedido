const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const env = fs.readFileSync('.env', 'utf8');
const urlMatch = env.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim());

async function updateProduct() {
  const code = 'AVN-0336';
  const newImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSID0ZHxP_1bSzKG8EZvDzo_ODU6_rkn6OblDofOGMRBw&s=10';
  const newDescription = 'DKNY Be Delicious es un perfume fresco, jugoso y vibrante, famoso mundialmente por su icónica botella con forma de manzana verde.Su aroma evoca un día luminoso en la ciudad, combinando la frescura crujiente de la manzana verde y el pepino con un corazón de flores suaves, asentado sobre una base limpia y ligeramente amaderada. Es la fragancia ideal para el uso diario si buscás un estilo enérgico, juvenil y ultra refrescante.';

  const { data, error } = await supabase
    .from('products')
    .update({
      image_url: newImageUrl,
      description: newDescription
    })
    .eq('code', code)
    .select();

  if (error) {
    console.error('Error updating product:', error);
    return;
  }

  console.log('Update successful:', JSON.stringify(data, null, 2));
}

updateProduct();
