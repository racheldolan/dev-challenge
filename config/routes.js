const router = require('express').Router();
const products = require('../controllers/products');

router.get('/', products.index);

module.exports = router;
