// STEALTH PLUGIN
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function scrapePost(url, target) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const pageSource = await page.content();

    await browser.close();
    console.log("page Source");
    console.log(pageSource);
    return pageSource.includes(target);

  } catch (error) {
    console.log(error);
  }
}

// RUN SCRIPT
const counts = Array.from(Array(5000).keys());
(async () => {
  for (let count of counts) {
    process.stdout.write(`${count} of ${counts.length} : `);
    const res = await scrapePost("https://www.instagram.com/p/CNU2lsDMJwN", "106440138038094");
    console.log(res ? "✅" : "❌");
  }
})();


