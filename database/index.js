// I think there may have been some issues having two database files ...
// included all of below in the index.js file

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/groupon-deals-db');

// var db = mongoose.connection;

// // need to confirm there will not be any sort of conflict issues by having two database files both creating mongoose connections
// // don't believe there are any ...

// db.on('error', console.error.bind(console, 'connection error:'));

// let getProdInfo = function(id, callback) {
//   // console.log('got to controller')
//   // db.Prod.find({ id: id }, function(err, results) {
//   db.Prods.find()
//     .byId(id)
//     .exec(function(err, results) {
//       if (err) {
//         callback(err);
//         console.log('error on MongoDB query');
//       } else {
//         callback(null, results);
//         console.log('MongoDB query successful');
//       }
//     });
// };

// module.exports.getProdInfo = getProdInfo;
