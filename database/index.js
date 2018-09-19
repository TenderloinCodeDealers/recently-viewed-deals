var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/groupon-deals-db');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// this entire section of code is a direct copy & paste from seed.js. Need the models in this file, but linking to the seed file to access those models will cause the entire seed.js file to run again
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

let Prod = mongoose.model('Prod', prodSchema);
let Serv = mongoose.model('Serv', servSchema);
// ... end

let getProdInfo = (id, callback) => {
  Prod.find({ id: id }, (err, results) => {
    if (err) {
      callback(err);
      console.log('error on MongoDB product query');
    } else {
      callback(null, results);
      console.log('MongoDB product query successful');
    }
  });
};

let getServInfo = (id, callback) => {
  Serv.find({ id: id }, (err, results) => {
    if (err) {
      callback(err);
      console.log('error on MongoDB service query');
    } else {
      callback(null, results);
      console.log('MongoDB service query successful');
    }
  });
};

module.exports.getProdInfo = getProdInfo;
module.exports.getServInfo = getServInfo;
