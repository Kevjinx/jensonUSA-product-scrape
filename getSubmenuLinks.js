import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  console.log('Running Puppeteer script...');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--disable-web-security'], // This is needed to bypass CORS
  });

  const page = await browser.newPage();
  await page.setBypassCSP(true); // This is needed to bypass CORS

  await page.goto('https://www.jensonusa.com/complete-bikes');

  const links = await page.evaluate(() => {
    const subMenu = document.querySelector('div.row > div.sub-menu-section');
    const links = subMenu.querySelectorAll('a');
    let array = [];
    links.forEach((link) => {
      link.href &&
        array.push({ link: link.href, name: link.textContent.trim() });
    });
    return array;
  });

  fs.writeFile('links.json', JSON.stringify(links), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  await browser.close();
})();
