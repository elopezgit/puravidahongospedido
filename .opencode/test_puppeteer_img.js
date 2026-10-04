const puppeteer = require('puppeteer-core');

async function test() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const query = 'Bharara King perfume bottle';
  await page.goto(`https://www.google.com/search?q=${encodeURIComponent(query)}&udm=2`, { waitUntil: 'networkidle2' });

  // Extract all encrypted-tbn0.gstatic.com image URLs
  const imgUrls = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img'));
    return images
      .map(img => img.src)
      .filter(src => src && src.includes('encrypted-tbn0.gstatic.com'));
  });

  console.log('Found gstatic URLs:', imgUrls.length);
  if (imgUrls.length > 0) {
    console.log('First 3:', imgUrls.slice(0, 3));
  }

  await browser.close();
}

test().catch(console.error);
