import puppeteer from 'puppeteer';

// takes in a url and returns the 'data-product-result-dto' data from each bike on the page, HELLA DATA!!!!!!

export const getBikeDataSubmenu = async (url) => {
  console.log('Running Puppeteer script...');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--disable-web-security'], // This is needed to bypass CORS
  });

  const page = await browser.newPage();
  await page.setBypassCSP(true); // This is needed to bypass CORS

  await page.goto(url);

  let isLastPage = false;
  let data = [];
  while (!isLastPage) {
    const currentData = await page.evaluate(() => {
      let array = [];
      const allItemContent = document.querySelectorAll('.item-content');
      allItemContent.forEach((item) => {
        const result = item.getAttribute('data-product-result-dto');
        const resultObj = JSON.parse(result);
        array.push(resultObj);
      });

      return array;
    });
    data.push(...currentData);

    const currentPage = await page.url();
    console.log('before: ', currentPage);

    const lastPageEnabled = await page.evaluate(() => {
      const button = document.querySelector('.pager-pagenum > a:nth-child(5)');
      return button.getAttribute('enabled');
    });

    console.log('isLastPage: ', isLastPage);
    console.log('lastPageEnabled: ', lastPageEnabled);

    if (lastPageEnabled === 'true') {
      console.log('not last page');
      const nextPageLink = await page.evaluate(() => {
        return document.querySelector('.pager-pagenum > a:nth-child(4)').href;
      });
      await page.goto(nextPageLink);
      const currentPage = await page.url();
      console.log('after: ', currentPage);
    }
    isLastPage = lastPageEnabled === 'false';
  }

  await browser.close();
  return data;
};
