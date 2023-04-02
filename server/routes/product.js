const router = require('express').Router();
const jwtAuth = require('../middleware/jwtAuth');
const { cart, deleteCart, addCart, checkout, products } = require ('../controllers/product');

router.post('/cart', jwtAuth, cart);
router.post('/cart/delete', jwtAuth, deleteCart)
router.post('/cart/add', jwtAuth, addCart);

router.post('/checkout', jwtAuth, checkout);

router.get('/products', products);

module.exports = router;