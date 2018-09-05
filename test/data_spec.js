/* global describe, beforeEach */

const Product = require('../../models/product');

const productData = [{
  supplierIsNewCoLtd: true,
  supplier: 'New Co Ltd',
  productType: 'Small wongle',
  price: 5,
  productNumber: 1
}];

describe('GET /products', () => {

  beforeEach(done => {
    Product.remove({})
      .then(() => Product.create(productData))
      .then(() => done());
  });


});
