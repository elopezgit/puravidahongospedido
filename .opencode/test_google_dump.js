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
  const url = 'https://www.google.com/search?q=Bharara+King+perfume&tbm=isch&asearch=ichunk&async=_id:rg_s,_pms:s,_fmt:pc';
  const res = await fetch(url, {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
  });
  console.log('Status:', res.status, 'Len:', res.data.length);
  fs.writeFileSync('.opencode/google_dump.html', res.data);
  const matches = res.data.match(/https:\/\/encrypted-tbn0\.gstatic\.com\/images\?q=tbn:[^"&\\<, ]+/g);
  console.log('Matches:', matches ? matches.slice(0, 5) : 'none');
}

inspectGoogle();
