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

async function getYahooImage(query) {
  try {
    const q = encodeURIComponent(query + ' perfume');
    const html = await fetch(`https://images.search.yahoo.com/search/images?p=${q}`, {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    
    // In yahoo images: data-src="https://tse..." or src="https://sp.yimg.com/ib/th?id=..." or imgurl=...
    const matches = html.match(/src="(https:\/\/[^"]*yimg\.com\/[^"]+)"/g) || html.match(/data-src="(https:\/\/[^"]*yimg\.com\/[^"]+)"/g);
    if (matches && matches.length > 0) {
      let url = matches[0].replace('src="', '').replace('data-src="', '').replace('"', '').replace(/&amp;/g, '&');
      return url;
    }
    
    const tseMatches = html.match(/https:\/\/tse[0-9]\.mm\.bing\.net\/th\?id=[^"&]+/g);
    if (tseMatches && tseMatches.length > 0) {
      return tseMatches[0];
    }

    return null;
  } catch(e) {
    return null;
  }
}

async function checkUrl(url) {
  return new Promise((resolve) => {
    try {
      const u = new URL(url);
      const req = https.request(u, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        resolve({ status: res.statusCode, type: res.headers['content-type'] });
      });
      req.on('error', () => resolve({ status: 500 }));
      req.setTimeout(3000, () => { req.abort(); resolve({ status: 408 }); });
      req.end();
    } catch(e) {
      resolve({ status: 500 });
    }
  });
}

async function test() {
  const list = [
    'Bharara King',
    'Bharara Rose',
    'Tubbees Berry Blast',
    'Paco Rabanne Invictus',
    'Carolina Herrera 212 VIP',
    'Jean Paul Gaultier Le Male',
    'Lattafa Khamrah Dukhan',
    'Skala Expert Brasil'
  ];

  for (const item of list) {
    const img = await getYahooImage(item);
    let check = null;
    if (img) check = await checkUrl(img);
    console.log(item, '->', img ? img.slice(0, 70) : 'NULL', check);
  }
}

test();
