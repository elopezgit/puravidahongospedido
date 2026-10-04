const https = require('https');
const http = require('http');

function fetchWithRedirect(url, headers = {}, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) return reject(new Error('Too many redirects'));
    const u = new URL(url);
    const lib = u.protocol === 'https:' ? https : http;
    const req = lib.get(u, { headers }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) loc = u.origin + loc;
        // pass set-cookie if any
        let newHeaders = { ...headers };
        if (res.headers['set-cookie']) {
          newHeaders['Cookie'] = res.headers['set-cookie'].map(c => c.split(';')[0]).join('; ');
        }
        return fetchWithRedirect(loc, newHeaders, maxRedirects - 1).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    });
    req.on('error', reject);
  });
}

async function test() {
  const url = 'https://www.google.com/search?q=perfume+Bharara+King&tbm=isch';
  const res = await fetchWithRedirect(url, {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  console.log('Final status:', res.status, 'Len:', res.data.length);
  const matches = res.data.match(/https:\/\/encrypted-tbn0\.gstatic\.com\/images\?q=tbn:[a-zA-Z0-9_\-]+/g);
  console.log('Matches:', matches ? matches.slice(0, 5) : 'none');
}

test();
