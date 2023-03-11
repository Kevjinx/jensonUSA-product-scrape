import puppeteer from 'puppeteer';
(async () => {
  console.log('Running Puppeteer script...');
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.jensonusa.com/complete-bikes');

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  const bikeSelector = '.productList > div.row > div.product-list-container';

  // Wait and click on first result
  const searchResultSelector = '.search-box__link';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    'text/Customize and automate'
  );
  const fullTitle = await textSelector.evaluate((el) => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
})();
