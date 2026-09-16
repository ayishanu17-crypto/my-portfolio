const { chromium } = require('playwright-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const slugs = ['kvantum-room', 'crop-care', 'debugique'];
const BASE = 'http://127.0.0.1:4174/my-portfolio/#/case-study/';

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ['--disable-gpu', '--no-first-run'] });
  for (const slug of slugs) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1400 }, deviceScaleFactor: 1 });
    await page.goto(BASE + slug, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(2500);
    const r = await page.evaluate(() => {
      const section = document.querySelector('[aria-label="Project screenshots and context"]');
      const cards = section
        ? [...section.querySelectorAll('img')].map((img) => {
            const box = img.closest('div[class*="overflow-hidden"]') || img.parentElement;
            return {
              src: img.getAttribute('src'),
              ok: img.complete && img.naturalWidth > 0,
              w: img.naturalWidth,
              cls: box ? box.className.slice(0, 220) : '',
            };
          })
        : [];
      const front = section?.querySelector('a[aria-label^="Open live site"]');
      return {
        h1: document.querySelector('h1')?.innerText || '(none)',
        cardCount: cards.length,
        cards,
        frontLink: front ? front.getAttribute('href') : null,
        hasPerspective: !!section?.querySelector('[class*="perspective"]') || !!(section && /perspective/.test(section.innerHTML)),
        hasContext: !!section && [...section.querySelectorAll('h2')].some((h) => h.innerText.trim().toUpperCase() === 'THE CONTEXT'),
      };
    });
    console.log('=== ' + slug + ' ===');
    console.log(JSON.stringify(r, null, 1));
    await page.screenshot({ path: `stack-${slug}.png` });
    await page.close();
  }
  await browser.close();
  console.log('DONE');
})().catch((e) => { console.error('FATAL', e); process.exit(1); });