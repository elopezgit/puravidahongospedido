const https = require('https');

function fetch(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function getBingThumb(query) {
  try {
    const q = encodeURIComponent(query.replace(/—/g, ' ') + ' perfume');
    const html = await fetch(`https://www.bing.com/images/search?q=${q}&form=HDRSC2`, {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });

    const matches = html.match(/src="https:\/\/tse[0-9]\.mm\.bing\.net\/th\?id=[^"]+"/g);
    if (matches && matches.length > 0) {
      const url = matches[0].replace('src="', '').replace('"', '').replace(/&amp;/g, '&');
      return url;
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function test() {
  const list = [
    'Rue Broca Hooked Azure',
    'French Avenue Veneno Blanco',
    'Bharara King',
    'Paco Rabanne Invictus Victory Elixir',
    'Jean Paul Gaultier Le Beau Paradise Garden',
    'Lattafa Khamrah Dukhan',
    'Karseell Collagen hair mask',
    'Ariana Grande Cloud',
    'Midoré Men perfume',
    'Caro Cuore Amore perfume',
    'Tubbees Pink Sugar body splash',
    'Moschino Toy 2 Bubble Gum'
  ];

  for (const item of list) {
    const thumb = await getBingThumb(item);
    console.log(item, '->', thumb);
  }
}

test();
