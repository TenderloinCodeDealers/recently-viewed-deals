var faker = require('faker');
var mongoose = require('mongoose');
mongoose.connect(
  'mongodb://recently-viewed-deals-db:mlabhigs415@ds211143.mlab.com:11143/recently-viewed-deals-db'
  // this is to connect to mLabs
);

var db = mongoose.connection;

db.on('error', e => console.error('connection error:', e));

db.dropCollection('prods', function(err, result) {
  if (err) {
    console.log('error dropping Prod collection', err);
  } else {
    console.log('succesfully droped Prod collection:', result);
    let prodSchema = new mongoose.Schema({
      id: {
        type: Number,
        unique: true
      },
      imageUrl: String,
      dealTagline: String,
      dealNumberBought: Number,
      origPrice: Number,
      price: Number,
      starRating: Number,
      numOfReviews: Number
    });
    let Prod = mongoose.model('Prod', prodSchema);

    let prodSaver = () => {
      for (var i = 0; i < 100; i++) {
        var origPrice =
          faker.random.number({
            min: 30,
            max: 150
          }) + 0.99;
        var price =
          faker.random.number({
            min: 25,
            max: origPrice
          }) + 0.99;

        var productData = {};
        productData.id = i;
        productData.imageUrl = `https://s3-us-west-1.amazonaws.com/groupon-stock-images/image-${i}.jpg`;
        productData.dealTagline = faker.company.catchPhrase();
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
