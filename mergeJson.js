import fs from 'fs-extra';

const jsonFiles = [
  './data/27.5InchMountainBikesData.json',
  './data/29InchMountainBikesData.json',
  './data/Cross-CountryMountainBikesData.json',
  './data/EnduroMountainBikesData.json',
  './data/FullSuspensionMountainBikesData.json',
  './data/HardtailMountainBikesData.json',
];
const readJsonFiles = async (files) => {
  const jsonObjects = [];

  for (const file of files) {
    try {
      const content = await fs.readJson(file);
      jsonObjects.push(content);
    } catch (err) {
      console.error(`Error reading file ${file}:`, err);
    }
  }

  return jsonObjects;
};

const mergeJsonObjects = (jsonArray) => {
  const mergedJson = {};

  jsonArray.forEach((jsonObj) => {
    Object.keys(jsonObj).forEach((key) => {
      if (!mergedJson[key]) {
        mergedJson[key] = jsonObj[key];
      } else {
        if (Array.isArray(mergedJson[key]) && Array.isArray(jsonObj[key])) {
          mergedJson[key] = [...new Set([...mergedJson[key], ...jsonObj[key]])];
        } else {
          // If you want to overwrite existing values with new values
          mergedJson[key] = jsonObj[key];
        }
      }
    });
  });

  return mergedJson;
};

const main = async () => {
  const jsonObjects = await readJsonFiles(jsonFiles);
  const mergedJson = mergeJsonObjects(jsonObjects);

  try {
    await fs.writeJson('allMtbBikes.json', mergedJson, { spaces: 2 });
    console.log('Merged JSON saved to merged.json');
  } catch (err) {
    console.error('Error writing merged JSON:', err);
  }
};

main();
