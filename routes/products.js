var express = require('express')
var router = express.Router()
var products = require('../services/products')

router.use(function (req, res, next) {
  products.getProducts().then(function (productCollection) {
    req.products = productCollection.items
    next()
  })
})

router.get('/', function (req, res, next) {
  res.render('index', {
    'title': 'Products',
    'products': req.products
  })
})

module.exports = router
