var mongoose = require('mongoose');
mongoose.connect(
  'mongodb://recently-viewed-deals-db:mlabhigs415@ds211143.mlab.com:11143/recently-viewed-deals-db'
);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// this entire section of code is a direct copy & paste from seed.js. Need the models in this file, but linking to the seed file to access those models will cause the entire seed.js file to run again
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
// ... end

let getProdInfo = (id, callback) => {
  Prod.find({ id: id }, (err, results) => {
    if (err) {
      callback(err, null);
      console.log('error on MongoDB product query');
    } else {
      callback(null, results);
      console.log('MongoDB product query successful');
    }
  });
};

module.exports.getProdInfo = getProdInfo;
