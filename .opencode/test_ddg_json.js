const https = require('https');

function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    });
    req.on('error', reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

async function searchDDGImage(query) {
  try {
    const searchRes = await fetch(`https://duckduckgo.com/?q=${encodeURIComponent(query + ' perfume')}`, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    const match = searchRes.data.match(/vqd=([0-9-]+)/) || searchRes.data.match(/vqd="([0-9-]+)"/);
    if (!match) return null;
    const vqd = match[1];

    const imgRes = await fetch(`https://duckduckgo.com/i.js?l=us-en&o=json&q=${encodeURIComponent(query + ' perfume')}&vqd=${vqd}&f=,,,;&p=1`, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://duckduckgo.com/'
      }
    });

    const parsed = JSON.parse(imgRes.data);
    if (parsed.results && parsed.results.length > 0) {
      // Pick first or image with clean domain
      return parsed.results[0].image;
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
    'Ariana Grande Cloud perfume'
  ];

  for (const item of list) {
    const img = await searchDDGImage(item);
    console.log(item, '->', img);
  }
}

test();
