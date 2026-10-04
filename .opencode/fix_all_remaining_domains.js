const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const env = fs.readFileSync('.env', 'utf8');
const urlMatch = env.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim());

function buildImageCDN(name) {
  let query = name.trim();
  
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

async function fixRemainingDomains() {
  const { data: aventus } = await supabase.from('empresas').select('id').eq('slug', 'aventus').single();
  const { data: products } = await supabase
    .from('products')
    .select('id, code, name, image_url')
    .eq('empresa_id', aventus.id);

  const reliableDomains = [
    'th.bing.com',
    'encrypted-tbn0.gstatic.com',
    'http2.mlstatic.com',
    'res.cloudinary.com'
  ];

  let count = 0;
  for (const prod of products) {
    if (prod.code === 'AVN-0336') continue;

    let isUnreliable = false;
    if (!prod.image_url) {
      isUnreliable = true;
    } else {
      try {
        const u = new URL(prod.image_url);
        if (!reliableDomains.includes(u.hostname)) {
          isUnreliable = true;
        }
      } catch(e) {
        isUnreliable = true;
      }
    }

    if (isUnreliable) {
      const newUrl = buildImageCDN(prod.name);
      await supabase.from('products').update({ image_url: newUrl }).eq('id', prod.id);
      count++;
      console.log(`[${count}] Fixed ${prod.code} (${prod.name}) -> ${newUrl}`);
    }
  }

  console.log(`\nUpdated ${count} additional products to reliable global CDN.`);
}

fixRemainingDomains();
