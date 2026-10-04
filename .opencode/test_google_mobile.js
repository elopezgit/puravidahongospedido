const https = require('https');
const fs = require('fs');

function fetch(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    }).on('error', reject);
  });
}

async function inspectGoogle() {
  // Mobile user agent often gets server-rendered HTML with base64/gstatic images
  const url = 'https://www.google.com/search?q=Bharara+King+perfume&tbm=isch';
  const res = await fetch(url, {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'es-ES,es;q=0.9'
  });
  console.log('Status:', res.status, 'Len:', res.data.length);
  fs.writeFileSync('.opencode/google_dump.html', res.data);
  const matches = res.data.match(/https:\/\/encrypted-tbn0\.gstatic\.com\/images\?q=tbn:[^"&\\<, ]+/g);
  console.log('Matches:', matches ? matches.slice(0, 5) : 'none');
}

inspectGoogle();
