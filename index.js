// STEALTH PLUGIN
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const url = `inserURL`;
console.log(`url: ${url}`);

try {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const pageSource = await page.content();

  await browser.close();
  console.log("page Source");
  console.log(pageSource);

} catch (error) {
  console.log(error);
}


