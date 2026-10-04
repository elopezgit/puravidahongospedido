const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const env = fs.readFileSync('.env', 'utf8');
const urlMatch = env.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim());

function buildImageCDN(name) {
  let query = name.trim();
  
  // Specific fine-tuning for certain brand queries to guarantee exact bottle match
  if (query.startsWith('BHARARA')) {
    query = query.replace('—', '').replace(/\s+/g, ' ') + ' Perfume';
  } else if (query.includes('TUBBEES') || ['BERRY BLAST', 'BEARY LOVE', 'CHERRY LUXE', 'PACIFIDREAM', 'TITANS SPLASH', 'PINK SUGAR', 'COTTON CANDY', 'SWEET CARAMEL', 'UNICORN VANILLA', 'BUBBLE GUMM', 'CHOCOLATE FUDGE', 'COOKIES DREAM'].includes(query)) {
    query = 'Tubbees ' + query + ' Body Splash';
  } else if (query.includes('MIDORE') || query.includes('MIDORÉ')) {
    query = query.replace('—', ' ').replace(/\s+/g, ' ') + ' Perfume Fragancia';
  } else if (query.includes('SKALA')) {
    query = 'Skala Expert Crema Capilar Brasil';
  } else if (query.includes('KARSEELL')) {
    query = 'Karseell Collagen Hair Treatment Mask';
  } else {
    query = query.replace('—', ' ').replace(/INSPIRADO EN.*/i, '').trim() + ' Perfume Bottle';
  }

  const encoded = encodeURIComponent(query);
  return `https://th.bing.com/th?q=${encoded}&w=300&h=300&c=7&rs=1&p=0`;
}

async function fixAllImages() {
  const { data: aventus } = await supabase.from('empresas').select('id').eq('slug', 'aventus').single();
  const { data: products } = await supabase
    .from('products')
    .select('id, code, name, image_url')
    .eq('empresa_id', aventus.id);

  console.log(`Analyzing ${products.length} Aventus products...`);

  let updatedCount = 0;

  for (const prod of products) {
    // Keep BE DELICIOUS AVN-0336 as the user confirmed it's working
    if (prod.code === 'AVN-0336') continue;

    // Check if the current image is an external shopify/broken brand link or generic
    const isBrokenOrExternal = 
      !prod.image_url ||
      prod.image_url.includes('encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQieVoMuTlKhmL7Ke4lZYC07zq6IEwnJGCbk5Hj_RpodQ') ||
      prod.image_url.includes('bhararabeauty.com') ||
      prod.image_url.includes('perfumesarabes.com.ar') ||
      prod.image_url.includes('perfumeriasmidore.com.ar') ||
      prod.image_url.includes('alhajisperfumes.com') ||
      prod.image_url.includes('lattafa.de') ||
      prod.image_url.includes('armafperfumes.com') ||
      prod.image_url.includes('carolinaherrera.com') ||
      prod.image_url.includes('rabanne.com') ||
      prod.image_url.includes('jeanpaulgaultier.com') ||
      prod.image_url.includes('bulgari.com') ||
      prod.image_url.includes('valentino-beauty.us') ||
      prod.image_url.includes('dior.com') ||
      prod.image_url.includes('moschino.com') ||
      prod.image_url.includes('giorgioarmanibeauty-usa.com') ||
      prod.image_url.includes('xerjoff.com') ||
      prod.image_url.includes('karseell.com') ||
      prod.image_url.includes('skalacosmeticos.com.br') ||
      prod.image_url.includes('assets.burberry.com') ||
      prod.image_url.includes('dolcegabbana.com') ||
      prod.image_url.includes('yslbeautyus.com') ||
      prod.image_url.includes('tomfordbeauty.com') ||
      prod.image_url.includes('azzaro.com') ||
      prod.image_url.includes('arianagrandefragrances.com') ||
      prod.image_url.includes('kenzoparfums.com') ||
      prod.image_url.includes('givenchybeauty.com') ||
      prod.image_url.includes('creedboutique.com') ||
      prod.image_url.includes('versace.com') ||
      prod.image_url.includes('isseymiyakeparfums.com') ||
      prod.image_url.includes('louisvuitton.com') ||
      prod.image_url.includes('ralphlauren.com');

    if (isBrokenOrExternal) {
      const newImageUrl = buildImageCDN(prod.name);
      const { error } = await supabase
        .from('products')
        .update({ image_url: newImageUrl })
        .eq('id', prod.id);

      if (!error) {
        updatedCount++;
        console.log(`[${updatedCount}] Fixed ${prod.code} (${prod.name}) -> ${newImageUrl}`);
      }
    }
  }

  console.log(`\nSuccessfully fixed images for ${updatedCount} products!`);
}

fixAllImages();
