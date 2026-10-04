const https = require('https');
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const env = fs.readFileSync('.env', 'utf8');
const urlMatch = env.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim());

function check(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ status: res.statusCode, type: res.headers['content-type'] });
    }).on('error', (e) => resolve({ error: e.message }));
  });
}

async function verifyScreenshotItems() {
  const codes = ['AVN-0336', 'AVN-0101', 'AVN-0094', 'AVN-0092', 'AVN-0091', 'AVN-0093', 'AVN-0393'];
  const { data: prods } = await supabase.from('products').select('code, name, image_url').in('code', codes);
  for (const p of prods) {
    const res = await check(p.image_url);
    console.log(`[${p.code}] ${p.name} -> HTTP ${res.status} (${res.type}) | URL: ${p.image_url.slice(0, 60)}...`);
  }
}

verifyScreenshotItems();
