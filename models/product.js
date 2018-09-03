const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  supplier: String,
  productType: String,
  price: Number
});

module.exports = mongoose.model('Product', productSchema);
