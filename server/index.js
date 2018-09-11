var express = require('express');
var app = express();
const controllers = require('../database/seed.js');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/:id/api/recently-viewed-product-data', function(req, res) {
  console.log('req.params.id', req.params.id);
  controllers.getProdInfo(req.params.id, function(error, results) {
    if (error) {
      console.log('ERROR', error);
    } else {
      console.log('successful return from controllers');
      console.log(results);
      res.send(results);
    }
  });
});

let port = 3003;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
