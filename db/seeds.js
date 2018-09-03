const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');

const Product = require('../models/product');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => Product.create([{
      supplierIsNewCoLtd: true,
      productType: 'Small wongle',
      price: 5
    }, {
      supplierIsNewCoLtd: true,
      productType: 'Large wongle',
      price: 8
    }, {
      supplierIsNewCoLtd: true,
      productType: 'Super wongle',
      price: 12
    }, {
      supplierIsNewCoLtd: false,
      productType: 'Mini wongle',
      price: 4
    }, {
      supplierIsNewCoLtd: false,
      productType: 'Small wongle',
      price: 6
    }, {
      supplierIsNewCoLtd: false,
      productType: 'Large wongle',
      price: 9
    }, {
      supplierIsNewCoLtd: false,
      productType: 'Super wongle',
      price: 13
    }]))
    .then(products => console.log(`${products.length} products created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
