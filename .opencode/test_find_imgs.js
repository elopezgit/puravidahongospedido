const https = require('https');
const http = require('http');

function fetchWithRedirect(url, headers = {}, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) return reject(new Error('Too many redirects'));
    const u = new URL(url);
    const req = https.get(u, { headers }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) loc = u.origin + loc;
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
  const url = 'https://www.google.com/search?q=Bharara+King+perfume&tbm=isch';
  const res = await fetchWithRedirect(url, {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9'
  });
  
  const content = res.data;
  console.log('Content length:', content.length);
  
  // Search for any img src or url
  const imgSrcs = [...content.matchAll(/src="(https:\/\/[^"]+)"/g)].map(m => m[1]);
  console.log('imgSrcs count:', imgSrcs.length);
  console.log('Sample imgSrcs:', imgSrcs.slice(0, 10));

  const allGstatic = [...content.matchAll(/https:\/\/[a-z0-9\.\-]*gstatic\.com\/[^\s"'>\\]+/g)].map(m => m[0]);
  console.log('allGstatic count:', allGstatic.length);
  console.log('Sample allGstatic:', allGstatic.slice(0, 10));
}

test();
