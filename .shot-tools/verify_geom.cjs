const { chromium } = require('playwright-core');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ['--disable-gpu', '--no-first-run'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  await page.goto('http://127.0.0.1:4174/my-portfolio/#/case-study/kvantum-room', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2500);
  const r = await page.evaluate(() => {
    const cards = [...document.querySelectorAll('[aria-label="Project screenshots and context"] a[class*="aspect-"], [aria-label="Project screenshots and context"] div[class*="aspect-"][class*="absolute"]')];
    const rects = cards.map((el) => {
      const b = el.getBoundingClientRect();
      return { w: Math.round(b.width), h: Math.round(b.height), x: Math.round(b.x), y: Math.round(b.y), cls: (el.className || '').slice(0, 70) };
    });
    // point in the middle of the front card (front card = the <a> with link)
    const frontLink = document.querySelector('[aria-label="Project screenshots and context"] a[href*="http"]') ||
      [...document.querySelectorAll('section a[href*="http"]')].pop();
    let topAtFrontCenter = null;
    if (frontLink) {
      const fb = frontLink.getBoundingClientRect();
      const el = document.elementFromPoint(Math.round(fb.x + fb.width / 2), Math.round(fb.y + fb.height / 2));
      topAtFrontCenter = el ? el.tagName + '.' + String(el.className).slice(0, 40) : null;
    }
    const sortedY = [...cards].map((el) => Math.round(el.getBoundingClientRect().y));
    return { rects, sortedY, topAtFrontCenter, totalCards: cards.length };
  });
  console.log(JSON.stringify(r, null, 1));
  await browser.close();
})();