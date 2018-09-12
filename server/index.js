
var express = require('express');
var app = express();
const controllers = require('../database/seed.js');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/:id/api/recently-viewed-product-data', (req, res) => {
  console.log('req.params.id', req.params.id);
  controllers.getProdInfo(req.params.id, (error, results) => {
    if (error) {
      console.log('Error in server products request', error);
    } else {
      console.log('successful product return from controllers');
      console.log(results);
      res.send(results);
    }
  });
});

app.get('/:id/api/recently-viewed-service-data', (req, res) => {
  console.log('req.params.id', req.params.id);
  controllers.getServInfo(req.params.id, (error, results) => {
    if (error) {
      console.log('Error in server services request', error);
    } else {
      console.log('successful service return from controllers');
      console.log(results);
      res.send(results);
    }
  });
});

let port = 3003;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
