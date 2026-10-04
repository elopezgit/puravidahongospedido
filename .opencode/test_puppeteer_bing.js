const puppeteer = require('puppeteer-core');

async function getImages(query) {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  // Use Bing Images which renders all image thumbnails directly in DOM
  await page.goto(`https://www.bing.com/images/search?q=${encodeURIComponent(query + ' perfume bottle')}&form=HDRSC2`, { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1500));

  const urls = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('.mimg, .iusc, img'));
    const res = [];
    for (const el of imgs) {
      if (el.src && el.src.startsWith('https://') && !el.src.includes('bing.com/rp') && !el.src.includes('data:')) {
        res.push(el.src);
      }
      // Also check murl inside iusc attribute
      const m = el.getAttribute('m');
      if (m) {
        try {
          const parsed = JSON.parse(m);
          if (parsed.murl) res.push(parsed.murl);
          if (parsed.turl) res.push(parsed.turl);
        } catch(e) {}
      }
    }
    return res;
  });

  await browser.close();
  return urls;
}

async function run() {
  const tests = ['Bharara King', 'Tubbees Berry Blast', 'Paco Rabanne Invictus'];
  for (const t of tests) {
    const imgs = await getImages(t);
    console.log(t, '-> total images found:', imgs.length);
    if (imgs.length > 0) {
      console.log('Sample:', imgs.slice(0, 3));
    }
  }
}

run().catch(console.error);
