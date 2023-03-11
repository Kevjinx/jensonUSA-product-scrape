import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  console.log('Running Puppeteer script...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--disable-web-security'],
  });
  const page = await browser.newPage();
  await page.setBypassCSP(true);

  await page.goto('https://www.jensonusa.com/Marin-Rift-Zone-1-Bike-2022');

  const imageSelector = '.product-main-image';
  await page.waitForSelector(imageSelector);

  const images = await page.evaluate(() => {
    const productImages = document.querySelectorAll('.product-image-item > a');
    let array = [];
    productImages.forEach((image) => {
      const link = image;
      if (array.includes(link.href) === false) {
        array.push(link.href);
      }
    });
    return array;
  });

  const name = await page.evaluate(() => {
    const name = document.querySelector('#product-description > h2').innerText;
    return name;
  });

  const specifications = await page.evaluate(() => {
    const table = document.querySelector('.spec');
    const rows = table.querySelectorAll('tr');
    const result = {};
    for (const row of rows) {
      const cells = row.querySelectorAll('td');
      if (cells.length > 0) {
        const key = row.querySelector('th').textContent;
        const value = cells[0].textContent;
        result[key] = value;
      }
    }
    return result;
  });

  const geometry = await page.evaluate(() => {
    const table = document.querySelector('#tab1 > table:nth-child(1)');

    const tableRows = table.querySelectorAll('tr');

    let geometryResult = {};

    tableRows.forEach((row) => {
      const sizes = Array.from(tableRows[0].querySelectorAll('td'));
      const header = row.querySelector('th');
      const tdata = row.querySelectorAll('td');
      tdata.forEach((td, index) => {
        const size = sizes[index].innerText;
        const value = td.innerText;
        geometryResult = {
          ...geometryResult,
          [header.innerText]: {
            ...geometryResult[header.innerText],
            [size]: value,
          },
        };
      });
    });
    return geometryResult;
  });

  const suggestedRiderHeight = await page.evaluate(() => {
    const table = document.querySelector('#tab1 > table:nth-child(2) > tbody');
    const tableRows = table.querySelectorAll('tr');

    let result = {};

    tableRows.forEach((row) => {
      const sizes = Array.from(tableRows[0].querySelectorAll('td'));
      const header = row.querySelector('th');
      const tdata = row.querySelectorAll('td');
      tdata.forEach((td, index) => {
        const size = sizes[index].innerText;
        const value = td.innerText;
        result = {
          ...result,
          [header.innerText]: {
            ...result[header.innerText],
            [size]: value,
          },
        };
      });
    });
    return result;
  });

  const data = {
    name,
    images,
    specifications,
    geometry,
    suggestedRiderHeight,
  };

  fs.writeFile('data.json', JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  await browser.close();
})();
