const https = require('https');

async function getGoogleImageThumbnail(query) {
  return new Promise((resolve) => {
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(query) + '&udm=2';
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Find all encrypted-tbn0.gstatic.com URLs
        const regex = /https:\/\/encrypted-tbn0\.gstatic\.com\/images\?q=tbn:[a-zA-Z0-9_\-]+/g;
        const matches = data.match(regex);
        if (matches && matches.length > 0) {
          // Remove duplicates
          const unique = [...new Set(matches)];
          // Return the first image result (or first 3)
          resolve(unique);
        } else {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function test() {
  const list = [
    'perfume Rue Broca Hooked Azure',
    'perfume French Avenue Veneno Blanco',
    'perfume Bharara King',
    'perfume Paco Rabanne Invictus Victory Elixir',
    'perfume Jean Paul Gaultier Le Beau Paradise Garden',
    'perfume Lattafa Khamrah Dukhan',
    'mascara capilar Skala brasil',
    'perfume Ariana Grande Cloud'
  ];

  for (const item of list) {
    const res = await getGoogleImageThumbnail(item);
    console.log(item, '->', res.slice(0, 2));
  }
}

test();
