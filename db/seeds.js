const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');

const Product = require('../models/product');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => Product.create([{
      supplier: 'New Co Ltd',
      productType: 'Small wongle',
      price: 5
    }, {
      supplier: 'New Co Ltd',
      productType: 'Large wongle',
      price: 8
    }, {
      supplier: 'New Co Ltd',
      productType: 'Super wongle',
      price: 12
    }, {
      supplier: 'Old Co Ltd',
      productType: 'Mini wongle',
      price: 4
    }, {
      supplier: 'Old Co Ltd',
      productType: 'Small wongle',
      price: 6
    }, {
      supplier: 'Old Co Ltd',
      productType: 'Large wongle',
      price: 9
    }, {
      supplier: 'Old Co Ltd',
      productType: 'Super wongle',
      price: 13
    }]))
    .then(products => console.log(`${products.length} products created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
