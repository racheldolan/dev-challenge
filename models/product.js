const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  supplierIsNewCoLtd: Boolean,
  supplier: String,
  productType: String,
  price: Number
});

module.exports = mongoose.model('Product', productSchema);
