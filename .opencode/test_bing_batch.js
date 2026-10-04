const https = require('https');

function check(query) {
  const cleanQ = query
    .replace(/—/g, ' ')
    .replace(/INSPIRADO EN.*/i, '')
    .trim();
  const url = `https://th.bing.com/th?q=${encodeURIComponent(cleanQ + ' Perfume Bottle')}&w=300&h=300&c=7&rs=1&p=0`;
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ query, url, status: res.statusCode, type: res.headers['content-type'] });
    }).on('error', (e) => resolve({ query, error: e.message }));
  });
}

async function test() {
  const list = [
    'BERRY BLAST',
    'BHARARA GOLD EDITION',
    'BHARARA KING',
    'BHARARA ROSE',
    'BHARARA SOLEIL',
    'RUE BROCA HOOKED AZURE',
    'FRENCH AVENUE VENENO BLANCO',
    'LATTAFA KHAMRAH DUKHAN',
    'PACO RABANNE INVICTUS',
    'CAROLINA HERRERA 212 VIP',
    'SKALA EXPERT BRASIL',
    'KARSEELL COLLAGEN HAIR MASK'
  ];

  for (const item of list) {
    const res = await check(item);
    console.log(item, '->', res.status, res.type, res.url);
  }
}

test();
