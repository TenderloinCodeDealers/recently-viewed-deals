var faker = require('faker');
var mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/groupon-deals-db'); 

var db = mongoose.connection; 

db.on('error', console.error.bind(console, 'connection error:'));

let prodSchema = new mongoose.Schema({
  id: {type: Number, unique: true}, 
  image_url: String, 
  product_deal_tagline: String, 
  deal_number_bought: Number, 
  price: Number, 
  star_rating: Number
}); 

let servSchema = new mongoose.Schema({
  id: {type: Number, unique: true}, 
  image_url: String, 
  company_name: String, 
  service_category: String, 
  phone_number: Number, 
  dollar_sign_metric: String, 
  hours_of_operation: String, 
  parking: String, 
  wifi: String, 
  good_for_kids: String, 
  good_for_groups: String, 
  takes_reservations: String, 
  alcohol: String, 
  location_title: String, 
  service_deal_tagline: String,
  price: Number,
  deal_number_bought: Number,
  star_rating: Number
})

let Prod = mongoose.model('Prod', prodSchema);
let Serv = mongoose.model('Serv', servSchema);


let saver = () => {

  for (var i = 0; i < 50; i++) {
    var productData = {}
    productData.id = i 
    productData.image_url = `https://s3-us-west-1.amazonaws.com/groupon-stock-images/image-${i}.jpg`
    productData.product_deal_tagline = faker.company.catchPhrase()
    productData.deal_number_bought = faker.random.number()
    productData.price = faker.commerce.price()
    productData.star_rating = faker.random.number({'min': 0, 'max': 5})

    var prodDoc = new Prod(productData)
 
    prodDoc.save(function(error){
      if (error) {
        console.log(error); 
      } else {
        console.log('product saved to repo')
      }
    })

  }

   for (var j = 50; j < 100; j++) {
    var serviceData = {}
    serviceData.id = j
    serviceData.image_url = `https://s3-us-west-1.amazonaws.com/groupon-stock-images/image-${j}.jpg`
    serviceData.company_name = faker.company.companyName()
    serviceData.service_category = faker.commerce.department()
    serviceData.phone_number = faker.random.number({'min': 10, 'max': 10})
    serviceData.dollar_sign_metric = faker.random.number({'min': 0, 'max': 5})
    serviceData.hours_of_operation = "9-5"
    serviceData.parking = faker.random.boolean()
    serviceData.wifi = faker.random.boolean()
    serviceData.good_for_kids = faker.random.boolean()
    serviceData.good_for_groups = faker.random.boolean()
    serviceData.takes_reservations = faker.random.boolean()
    serviceData.alcohol = faker.random.boolean()
    serviceData.location_title = faker.address.city()
    serviceData.service_deal_tagline = faker.company.catchPhrase()
    serviceData.price = faker.commerce.price()
    serviceData.deal_number_bought = faker.random.number()
    serviceData.star_rating = faker.random.number({'min': 0, 'max': 5})

    var servDoc = new Serv(serviceData)
 
    servDoc.save(function(error){
      if (error) {
        console.log(error); 
      } else {
        console.log('service saved to repo')
      }
    })

   }
}

saver(); 




