const express = require('express'); 
const bodyParser = require('body-parser'); 
const controllers = require('../database/index.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

// app.use(bodyParser.json()); 

app.get('/:id/api/recently-viewed-product-data', function(req, res){ 
  var productId = req.params.id; 
  console.log(productId)
  controllers.getProduct(productId, function(error, results){
    if (error) {
      console.log('ERROR')
    } else {
      console.log('successful GET request')
      res.send(results)
    }
  })
})

let port = 3003;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
