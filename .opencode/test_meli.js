const https = require('https');

function fetchJson(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch(e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function getMeliImage(query) {
  const url = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(query)}&limit=5`;
  const data = await fetchJson(url);
  if (data && data.results && data.results.length > 0) {
    // Find first result with a clean thumbnail/image
    for (const item of data.results) {
      if (item.thumbnail) {
        // High res conversion: replace -I.jpg or -V.jpg with -O.jpg for full high-def
        let highRes = item.thumbnail.replace('http://', 'https://').replace(/-I\.jpg$/i, '-O.jpg').replace(/-V\.jpg$/i, '-O.jpg');
        return highRes;
      }
    }
  }
  return null;
}

async function test() {
  const list = [
    'Bharara King perfume',
    'Bharara Rose perfume',
    'Tubbees Berry Blast splash',
    'Paco Rabanne Invictus Victory',
    'Carolina Herrera 212 VIP',
    'Jean Paul Gaultier Le Male',
    'Lattafa Khamrah Qahwa',
    'Skala Expert Brasil',
    'Karseell Collagen mascarilla',
    'French Avenue Liquid Brun',
    'Midoré Men perfume'
  ];

  for (const item of list) {
    const img = await getMeliImage(item);
    console.log(item, '->', img);
  }
}

test();
