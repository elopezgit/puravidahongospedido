const https = require('https');

async function searchGoogleImages(query) {
  return new Promise((resolve) => {
    const url = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(query + ' perfume');
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Regex to find google image thumbnails or image urls
        // In google images html: [\"https://encrypted-tbn0.gstatic.com/images?q=tbn:...\",...]
        const matches = data.match(/https:\/\/encrypted-tbn0\.gstatic\.com\/images\?q=tbn:[^\\",; ]+/g);
        if (matches && matches.length > 1) {
          // The first one might be google logo, 2nd is usually the 1st result
          resolve(matches[1]);
        } else if (matches && matches.length > 0) {
          resolve(matches[0]);
        } else {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function test() {
  const tests = [
    'RUE BROCA HOOKED AZURE',
    'FRENCH AVENUE VENENO BLANCO',
    'BHARARA ROSE',
    'PACO RABANNE INVICTUS VICTORY',
    'LATTAFA KHAMRAH DUKHAN'
  ];
  for (const t of tests) {
    const img = await searchGoogleImages(t);
    console.log(t, '->', img);
  }
}

test();
