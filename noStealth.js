// STEALTH PLUGIN
const puppeteer = require('puppeteer');

const url = `https://instagram.com/p/CNU2lsDMJwN`;
console.log(`url: ${url}`);

(async () => {
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
})();


