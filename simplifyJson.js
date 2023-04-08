import fs from 'fs-extra';

const simplifyJson = (jsonObj) => {
  const simplified = [];

  for (const key in jsonObj) {
    const obj = jsonObj[key];
    const newObj = {
      name: obj.Name,
      imageUrl: obj.SelectedVariant.ImageUrl,
      brand: obj.Brand,
      price: obj.Price[0],
      discipline: obj.FacetFieldsDictionary.MultiValueDiscipline,
      wheelSize: obj.FacetFieldsDictionary.WheelSize,
      drivetrainType: obj.FacetFieldsDictionary.DrivetrainType,
      bikeModel: obj.FacetFieldsDictionary.BikeModel,
      rearSuspensionType: obj.FacetFieldsDictionary.RearSuspensionType,
      forkTravel: obj.FacetFieldsDictionary.ForkTravel,
      averageRating: obj.AverageRating,
      reviewCount: obj.NumberOfReviews,
    };
    simplified.push(newObj);
  }

  fs.writeFile(
    'simplifiedMtbBikesArray.json',
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
