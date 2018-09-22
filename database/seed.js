// need to keep the seed script as a blackbox. We want to make sure that it does not run accidentily (which would continously re-seed our DB)
// therefore, (1) added '/seed.js/' to the 'exclude' list in our webpack.config.js
// (2) removed any lookups to this file (i.e. accessing the models in this file in the database/index.js file). Instead, just copy & pasted the model code I needed into the database/index.js file directly

var faker = require('faker');
var mongoose = require('mongoose');
mongoose.connect(
  'mongodb://recently-viewed-deals-db:mlabhigs415@ds211143.mlab.com:11143/recently-viewed-deals-db'
);

var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
db.on('error', e => console.error('connection error:', e));

db.dropCollection('prods', function(err, result) {
  if (err) {
    console.log('error dropping Prod collection', err);
  } else {
    console.log('succesfully droped Prod collection:', result);
    // prodDrop = true;
    let prodSchema = new mongoose.Schema({
      id: {
        type: Number,
        unique: true
      },
      imageUrl: String,
      productDealTagline: String,
      dealNumberBought: Number,
      origPrice: Number,
      price: Number,
      starRating: Number,
      numOfReviews: Number
    });
    let Prod = mongoose.model('Prod', prodSchema);

    let prodSaver = () => {
      for (var i = 0; i < 50; i++) {
        var origPrice = faker.random.number({
          min: 25,
          max: 150
        });
        var price = faker.random.number({
          min: 25,
          max: origPrice
        });

        var productData = {};
        productData.id = i;
        productData.imageUrl = `https://s3-us-west-1.amazonaws.com/groupon-stock-images/image-${i}.jpg`;
        productData.productDealTagline = faker.company.catchPhrase();
        productData.locationTitle = faker.address.city();
        productData.dealNumberBought =
          faker.random.number({
            min: 1,
            max: 300
          }) * 10;
        productData.origPrice = origPrice;
        productData.price = price;
        productData.starRating = faker.random.number({
          min: 3,
          max: 5
        });
        productData.numOfReviews = faker.random.number({
          min: 5,
          max: 200
        });

        var prodDoc = new Prod(productData);

        prodDoc.save(error => {
          if (error) {
            console.log(error);
          } else {
            console.log('product saved to repo');
          }
        });
      }
    };
    prodSaver();
  }
});

db.dropCollection('servs', function(err, result) {
  if (err) {
    console.log('error dropping Serv collection', err);
  } else {
    console.log('succesfully droped Serv collection:', result);
    // servDrop = true;
    let servSchema = new mongoose.Schema({
      id: {
        type: Number,
        unique: true
      },
      imageUrl: String,
      companyName: String,
      serviceCategory: String,
      phoneNumber: Number,
      dollarSignMetric: String,
      hoursOfOperation: String,
      parking: String,
      wifi: String,
      goodForKids: String,
      goodForGroups: String,
      takesReservations: String,
      alcohol: String,
      locationTitle: String,
      serviceDealTagline: String,
      origPrice: Number,
      price: Number,
      dealNumberBought: Number,
      starRating: Number,
      numOfReviews: Number
    });
    let Serv = mongoose.model('Serv', servSchema);

    let servSaver = () => {
      for (var j = 50; j < 100; j++) {
        var origPrice = faker.random.number({
          min: 25,
          max: 150
        });
        var price = faker.random.number({
          min: 25,
          max: origPrice
        });

        var serviceData = {};
        serviceData.id = j;
        serviceData.imageUrl = `https://s3-us-west-1.amazonaws.com/groupon-stock-images/image-${j}.jpg`;
        serviceData.companyName = faker.company.companyName();
        serviceData.serviceCategory = faker.commerce.department();
        serviceData.phoneNumber = faker.random.number({
          min: 10,
          max: 10
        });
        serviceData.dollarSignMetric = faker.random.number({
          min: 1,
          max: 4
        });
        serviceData.hoursOfOperation = '9-5';
        serviceData.parking = faker.random.boolean();
        serviceData.wifi = faker.random.boolean();
        serviceData.goodForKids = faker.random.boolean();
        serviceData.goodForGroups = faker.random.boolean();
        serviceData.takesReservations = faker.random.boolean();
        serviceData.alcohol = faker.random.boolean();
        serviceData.locationTitle = faker.address.city();
        serviceData.serviceDealTagline = faker.company.catchPhrase();
        serviceData.origPrice = origPrice;
        serviceData.price = price;
        serviceData.dealNumberBought =
          faker.random.number({
            min: 1,
            max: 300
          }) * 10;
        serviceData.starRating = faker.random.number({
          min: 3,
          max: 5
        });
        serviceData.numOfReviews = faker.random.number({
          min: 5,
          max: 200
        });

        var servDoc = new Serv(serviceData);

        servDoc.save(error => {
          if (error) {
            console.log(error);
          } else {
            console.log('service saved to repo');
          }
        });
      }
    };
    servSaver();
  }
});
