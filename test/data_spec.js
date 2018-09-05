/* global describe, it, api, expect, beforeEach */

const Product = require('../models/product');

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

  it('should return a 200 response', done => {
    api.get('/api/products')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array', done => {
    api.get('/api/products')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return an array of objects', done => {
    api.get('/api/products')
      .end((err, res) => {
        res.body.forEach(product => expect(product).to.be.an('object'));
        done();
      });
  });

});
