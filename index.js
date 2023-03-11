import { getBikeDataSubmenu } from './getBikeDataSubmenu.js';
import { links } from './links.js';
import fs from 'fs';

const getBikeData = async () => {
  links.forEach(async (item) => {
    const itemName = item.name.replace(/\s+/g, '');
    console.log(itemName);
    const data = await getBikeDataSubmenu(item.link);
    fs.writeFile(`data/${itemName}Data.json`, JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  });
};

getBikeData();
