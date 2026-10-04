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

async function getBestProductImage(perfumeName) {
  try {
    const cleanQuery = perfumeName
      .replace(/—/g, ' ')
      .replace(/INSPIRADO EN.*/i, '')
      .trim();

    const query = cleanQuery + ' perfume frasco fondo blanco';
    const res = await fetch('https://www.bing.com/images/search?q=' + encodeURIComponent(query) + '&form=HDRSC2', {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });

    const matches = [...res.data.matchAll(/murl&quot;:&quot;(http[^&]+)&quot;/g)].map(m => m[1]);
    
    // Whitelist / prioritize good e-commerce image CDNs (shopify, fragrantica, parfumo, mitiendanube, falabella, mercadolibre, juleriaque, rouge, etc.)
    const goodImage = matches.find(url => {
      const lower = url.toLowerCase();
      // Exclude bad domains
      if (lower.includes('facebook') || lower.includes('fbsbx') || lower.includes('youtube') || lower.includes('scribd') || lower.includes('stockcake') || lower.includes('freepik') || lower.includes('shutterstock')) {
        return false;
      }
      return lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.png') || lower.endsWith('.webp') || lower.includes('cdn') || lower.includes('fragrantica') || lower.includes('parfumo') || lower.includes('shopify') || lower.includes('mitiendanube');
    });

    return goodImage || matches[0] || null;
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
    'MOSCHINO TOY 2 BUBBLE GUM',
    'ARIANA GRANDE CLOUD',
    'JEAN PAUL GAULTIER SCANDAL',
    'DIOR FAHRENHEIT',
    'YVES SAINT LAURENT MYSLF'
  ];

  for (const t of tests) {
    const img = await getBestProductImage(t);
    console.log(t, '->', img);
  }
}

test();
