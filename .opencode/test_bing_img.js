const https = require('https');

function fetch(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    });
    req.on('error', reject);
  });
}

async function searchBingImage(query) {
  try {
    const res = await fetch('https://www.bing.com/images/search?q=' + encodeURIComponent(query + ' perfume bottle') + '&form=HDRSC2', {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    // In Bing Images html: murl&quot;:&quot;https:...&quot; or src="https://tse...
    const murlMatches = res.data.match(/murl&quot;:&quot;(http[^&]+)&quot;/g);
    if (murlMatches && murlMatches.length > 0) {
      const match = murlMatches[0].match(/murl&quot;:&quot;(http[^&]+)&quot;/);
      if (match) return match[1];
    }
    const turlMatches = res.data.match(/src="https:\/\/tse[0-9]\.mm\.bing\.net\/th\?id=[^"]+"/g);
    if (turlMatches && turlMatches.length > 0) {
      return turlMatches[0].replace('src="', '').replace('"', '');
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function test() {
  const tests = [
    'RUE BROCA HOOKED AZURE',
    'FRENCH AVENUE VENENO BLANCO',
    'BHARARA ROSE',
    'PACO RABANNE INVICTUS VICTORY',
    'LATTAFA KHAMRAH DUKHAN',
    'KARSEELL COLLAGEN HAIR MASK',
    'TUBBEES CHERRY LUXE SPLASH'
  ];
  for (const t of tests) {
    const img = await searchBingImage(t);
    console.log(t, '->', img);
  }
}

test();
