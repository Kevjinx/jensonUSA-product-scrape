import puppeteer from 'puppeteer';
import fs from 'fs';

// NOT NEEDED anymore because jensonusa has jsonData inside the html!!!!
// see getBikeDataSubmenu.js
(async () => {
  console.log('Running Puppeteer script...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--disable-web-security'], // This is needed to bypass CORS
  });
  const page = await browser.newPage();
  await page.setBypassCSP(true); // This is needed to bypass CORS

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

  const features = await page.evaluate(() => {
    const productSection = document.querySelector('#product-description');
    const allFeatures = productSection.querySelectorAll('ul > li');
    let featuresArray = [];
    allFeatures.forEach((feature) => {
      featuresArray.push(feature.innerHTML);
    });
    return featuresArray;
  });

  const marketingHype = await page.evaluate(() => {
    const hypeText = Array.from(
      document.querySelectorAll('#product-description > p')
    ).slice(0, 2);
    let hypeArray = [];
    hypeText.forEach((text) => {
      hypeArray.push(text.innerText);
    });
    return hypeArray;
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

    let geometryResult = [];

    tableRows.forEach((row) => {
      const sizes = Array.from(tableRows[0].querySelectorAll('td'));
      const header = row.querySelector('th');
      const tData = row.querySelectorAll('td');
      let geometryObj = {
        [header.innerText]: {},
      };
      tData.forEach((td, index) => {
        const size = sizes[index].innerText;
        const value = td.innerText;
        geometryObj[header.innerText][size] = value;
      });
      geometryResult.push(geometryObj);
      return geometryObj;
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

  const prices = await page.evaluate(() => {
    const msrp = document.querySelector('span.msrp > span').innerText;
    const currentPrice = document.querySelector('#price').innerText;
    return { msrp, currentPrice };
  });

  const reviews = await page.evaluate(() => {
    const allReviews = document.querySelectorAll('div.tt-u-spacing--sm');
    let reviewsArray = [];
    allReviews.forEach((review) => {
      try {
        const headingText = review.querySelector(
          '.tt-c-review__heading-text'
        ).innerText;
        const ratingText = review.querySelector('.tt-u-clip-hide').innerText;
        const reviewText = review.querySelector(
          '.tt-c-review__text-content'
        ).innerText;
        const reviewDate = review.querySelector('.tt-c-review__date').innerText;
        const reviewerName = review.querySelector(
          '.tt-o-byline__author'
        ).innerText;

        const reviewObj = {
          reviewerName,
          headingText,
          reviewText,
          ratingText,
          reviewDate,
        };
        console.log('reviewObj: ', reviewObj);

        reviewsArray.push(reviewObj);
      } catch (error) {
        console.log(error);
      }
    });

    return reviewsArray;
  });

  const data = {
    name,
    images,
    specifications,
    geometry,
    suggestedRiderHeight,
    prices,
    reviews,
    marketingHype,
    features,
  };

  fs.writeFile('oneBike.json', JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  await browser.close();
})();
