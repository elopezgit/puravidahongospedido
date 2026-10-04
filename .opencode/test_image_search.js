const https = require('https');

function fetchUrl(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function searchPerfumeImage(query) {
  try {
    const q = encodeURIComponent(query.replace(/—/g, ' ') + ' perfume bottle');
    const html = await fetchUrl(`https://html.duckduckgo.com/html/?q=${q}`, {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    });
    
    // Extract thumbnail or image URLs from html or ddg
    const imgMatches = html.match(/src="(\/\/external-content\.duckduckgo\.com\/iu\/\?u=[^"]+)"/g);
    if (imgMatches && imgMatches.length > 0) {
      let first = imgMatches[0].replace('src="', '').replace('"', '');
      if (first.startsWith('//')) first = 'https:' + first;
      // Decode the underlying source url
      const uMatch = first.match(/\?u=([^&]+)/);
      if (uMatch) {
        return decodeURIComponent(uMatch[1]);
      }
      return first;
    }
    return null;
  } catch (e) {
    console.error('Search error for:', query, e.message);
    return null;
  }
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
    const img = await searchPerfumeImage(t);
    console.log(t, '->', img);
  }
}

test();
