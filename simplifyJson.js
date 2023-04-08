import fs from 'fs-extra';

const simplifyJson = (jsonObj) => {
  const simplified = {};

  for (const key in jsonObj) {
    const obj = jsonObj[key];
    simplified[key] = {
      name: obj.Name,
      imageUrl: obj.SelectedVariant.ImageUrl,
      brand: obj.Brand,
      price: obj.Price[0],
      MultiValueDiscipline: obj.FacetFieldsDictionary.MultiValueDiscipline,
      WheelSize: obj.FacetFieldsDictionary.WheelSize,
      DrivetrainType: obj.FacetFieldsDictionary.DrivetrainType,
      BikeModel: obj.FacetFieldsDictionary.BikeModel,
      RearSuspensionType: obj.FacetFieldsDictionary.RearSuspensionType,
      ForkTravel: obj.FacetFieldsDictionary.ForkTravel,
    };
  }

  fs.writeFile(
    'simplifiedMtbBikes.json',
    JSON.stringify(simplified, null, 2),
    (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }
  );
};

fs.readFile('allMtbBikes.json', 'utf8', (err, data) => {
  if (err) throw err;
  const jsonObj = JSON.parse(data);
  simplifyJson(jsonObj);
});
