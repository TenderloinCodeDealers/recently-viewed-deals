var faker = require('faker');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/groupon-deals-db');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

let prodSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  imageUrl: String,
  productDealTagline: String,
  dealNumberBought: Number,
  price: Number,
  starRating: Number
});

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
  price: Number,
  dealNumberBought: Number,
  starRating: Number
});

let Prod = mongoose.model('Prod', prodSchema);
let Serv = mongoose.model('Serv', servSchema);


let saver = () => {

  for (var i = 0; i < 50; i++) {
    var productData = {};
    productData.id = i;
    productData.imageUrl = `https://s3-us-west-1.amazonaws.com/groupon-stock-images/image-${i}.jpg`;
    productData.productDealTagline = faker.company.catchPhrase();
    productData.locationTitle = faker.address.city();
    productData.dealNumberBought = faker.random.number();
    productData.price = faker.commerce.price();
    productData.starRating = faker.random.number({
      'min': 0,
      'max': 5
    });

    var prodDoc = new Prod(productData);

    prodDoc.save(function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('product saved to repo');
      }
    });

  }

  for (var j = 50; j < 100; j++) {
    var serviceData = {};
    serviceData.id = j;
    serviceData.imageUrl = `https://s3-us-west-1.amazonaws.com/groupon-stock-images/image-${j}.jpg`;
    serviceData.companyName = faker.company.companyName();
    serviceData.serviceCategory = faker.commerce.department();
    serviceData.phoneNumber = faker.random.number({
      'min': 10,
      'max': 10
    });
    serviceData.dollarSignMetric = faker.random.number({
      'min': 0,
      'max': 5
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
    serviceData.price = faker.commerce.price();
    serviceData.dealNumberBought = faker.random.number();
    serviceData.starRating = faker.random.number({
      'min': 0,
      'max': 5
    });

    var servDoc = new Serv(serviceData);

    servDoc.save(function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('service saved to repo');
      }
    });

  }
};

saver();