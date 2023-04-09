# Scrape JensonUSA Product Data

Using Puppeteer and Nodejs to scrape product data from JensonUSA.com

You can also download the data from my Kaggle:

[[https://www.kaggle.com/andrewmvd/jenson-usa-product-data](https://www.kaggle.com/datasets/audiblepotahto/jensonusa-product-data)](https://www.kaggle.com/datasets/audiblepotahto/jensonusa-product-data)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Example Dataset](#example-dataset)

## Installation

`npm install`

`npm start`

This will create a `data` folder with .json files containing all the scraped data for each product category (submenu).

## Usage

The data is already scraped and saved in the `data` folder. If you want to scrape the data again, you can run `npm start` again.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

But more importantly, please feel free to use this code for your own projects. I hope it helps you out!

## Example Dataset

```
 {
    "Id": 363512,
    "Name": "Marin San Quentin 3 Bike 2022",
    "Code": "BI002179",
    "Url": "/Marin-San-Quentin-3-Bike-2022",
    "IsOnSale": true,
    "IsNew": false,
    "Created": "2020-08-19T20:05:30+00:00",
    "SelectedVariant": {
      "Code": "BI002179 GLOSS RED/BLACK SM",
      "Color": "Gloss Red/Black",
      "ListPrice": { "Amount": 1589.94, "Currency": "USD" },
      "MsrpPrice": { "Amount": 2399, "Currency": "USD" },
      "ImageUrl": "https://jnsn.imgix.net/globalassets/product-images---all-assets/marin-2021/bi002179-gloss-red~black.jpg?w=250&h=300&auto=format&q=70&fit=fillmax&fill-color=ffffff&fill=solid",
      "SwatchImageUrl": "https://jnsn.imgix.net/globalassets/product-images---all-assets/marin-2021/bi002179-gloss-red~black-swatch.jpg?w=30&h=30&fit=max&auto=format&q=70",
      "SavingPercent": 34,
      "Order": 0
    },
    "Variants": [
      {
        "Code": "BI002179 GLOSS RED/BLACK SM",
        "Color": "Gloss Red/Black",
        "ListPrice": { "Amount": 1589.94, "Currency": "USD" },
        "MsrpPrice": { "Amount": 2399, "Currency": "USD" },
        "ImageUrl": "https://jnsn.imgix.net/globalassets/product-images---all-assets/marin-2021/bi002179-gloss-red~black.jpg?w=250&h=300&auto=format&q=70&fit=fillmax&fill-color=ffffff&fill=solid",
        "SwatchImageUrl": "https://jnsn.imgix.net/globalassets/product-images---all-assets/marin-2021/bi002179-gloss-red~black-swatch.jpg?w=30&h=30&fit=max&auto=format&q=70",
        "SavingPercent": 34,
        "Order": 0
      },
      {
        "Code": "BI002179 GLOSS RED/BLACK MED",
        "Color": "Gloss Red/Black",
        "ListPrice": { "Amount": 1589.94, "Currency": "USD" },
        "MsrpPrice": { "Amount": 2399, "Currency": "USD" },
        "ImageUrl": "https://jnsn.imgix.net/globalassets/product-images---all-assets/marin-2021/bi002179-gloss-red~black.jpg?w=250&h=300&auto=format&q=70&fit=fillmax&fill-color=ffffff&fill=solid",
        "SwatchImageUrl": "/globalassets/product-images---all-assets/marin-2021/bi002179-gloss-red~black-swatch.jpg",
        "SavingPercent": 34,
        "Order": 0
      },
      {
        "Code": "BI002179 GLOSS RED/BLACK LRG",
        "Color": "Gloss Red/Black",
        "ListPrice": { "Amount": 1589.94, "Currency": "USD" },
        "MsrpPrice": { "Amount": 2399, "Currency": "USD" },
        "ImageUrl": "https://jnsn.imgix.net/globalassets/product-images---all-assets/marin-2021/bi002179-gloss-red~black.jpg?w=250&h=300&auto=format&q=70&fit=fillmax&fill-color=ffffff&fill=solid",
        "SwatchImageUrl": "/globalassets/product-images---all-assets/marin-2021/bi002179-gloss-red~black-swatch.jpg",
        "SavingPercent": 34,
        "Order": 0
      },
      {
        "Code": "BI002179 GLOSS RED/BLACK XL",
        "Color": "Gloss Red/Black",
        "ListPrice": { "Amount": 1589.94, "Currency": "USD" },
        "MsrpPrice": { "Amount": 2399, "Currency": "USD" },
        "ImageUrl": "https://jnsn.imgix.net/globalassets/product-images---all-assets/marin-2021/bi002179-gloss-red~black.jpg?w=250&h=300&auto=format&q=70&fit=fillmax&fill-color=ffffff&fill=solid",
        "SwatchImageUrl": "/globalassets/product-images---all-assets/marin-2021/bi002179-gloss-red~black-swatch.jpg",
        "SavingPercent": 34,
        "Order": 0
      }
    ],
    "FacetFieldsDictionary": {
      "MultiValueFeatures": [
        "Shimano Components",
        "Dropper Seatpost",
        "Internal Cable Routing"
      ],
      "Size": ["Small", "Medium", "Large", "Extra Large"],
      "Color": ["Gloss Red/Black"],
      "FinancingAvailable": ["True"],
      "MultiValueDiscipline": ["MTB"],
      "Gender": ["Men"],
      "RearSuspensionType": ["Hardtail"],
      "BikeModel": ["Marin San Quentin"],
      "ForkTravel": ["130mm"],
      "DrivetrainType": ["1x12 Speed"],
      "WheelSize": ["27.5\""],
      "MultiValueIntendedUse": ["Trail / All-Mountain"],
      "FrameMaterial": ["Aluminum"]
    },
    "CatalogNodeCodes": [
      "C0000QE6",
      "C0000QE5",
      "5637144578",
      "5637144576",
      "Financing_1",
      "Featured",
      "Marin Bikes",
      "Bikes25th",
      "25thSale",
      "Sales",
      "HTMTBIKES",
      "TRAMMTBIKES",
      "275MTBBIKES",
      "5637229331",
      "5637229328",
      "5637229326",
      "5637238327"
    ],
    "Price": ["$1,589.94"],
    "SortPrice": 1589.94,
    "Discount": 34,
    "Brand": "Marin Bikes",
    "AverageRating": 5,
    "NumberOfReviews": 2,
    "ImageUrl": null,
    "Published": "2021-04-27T12:30:54+00:00",
    "ColorVariantsToShow": [
      {
        "Code": "BI002179 GLOSS RED/BLACK SM",
        "Color": "Gloss Red/Black",
        "ListPrice": { "Amount": 1589.94, "Currency": "USD" },
        "MsrpPrice": { "Amount": 2399, "Currency": "USD" },
        "ImageUrl": "https://jnsn.imgix.net/globalassets/product-images---all-assets/marin-2021/bi002179-gloss-red~black.jpg?w=250&h=300&auto=format&q=70&fit=fillmax&fill-color=ffffff&fill=solid",
        "SwatchImageUrl": "https://jnsn.imgix.net/globalassets/product-images---all-assets/marin-2021/bi002179-gloss-red~black-swatch.jpg?w=30&h=30&fit=max&auto=format&q=70",
        "SavingPercent": 34,
        "Order": 0
      }
    ]
  }
```
