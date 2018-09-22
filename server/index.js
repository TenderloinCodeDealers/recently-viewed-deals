const controllers = require('../database/index.js');
var express = require('express');
var app = express();

// below allows cross origin requests (when team member's proxy servers are trying to connect)
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/:id/', express.static(__dirname + '/../client/dist'));
// need to add '/:id/' to tell express to serve the static files for any url that ends in an id ...
// without this, express will only serve the static files for localhost:3003 and wouldn't work for localhost:3003/1 ... etc,

app.get('/:id/api/recently-viewed-product-data', (req, res) => {
  console.log('req.params.id', req.params.id);
  controllers.getProdInfo(req.params.id, (error, results) => {
    if (error) {
      res.sendStatus(500);
      console.log('Error in server products request', error);
    } else {
      console.log('successful product return from controllers');
      console.log(results);
      res.status(200).send(results);
    }
  });
});

app.get('/:id/api/recently-viewed-service-data', (req, res) => {
  console.log('req.params.id', req.params.id);
  controllers.getServInfo(req.params.id, (error, results) => {
    if (error) {
      console.log('Error in server services request', error);
      res.sendStatus(500);
    } else {
      console.log('successful service return from controllers');
      console.log(results);
      res.status(200).send(results);
    }
  });
});

let port = 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
