const mongoose = require('mongoose');
const Product = require('./productModel');

const cartSchema = new mongoose.Schema({
    product: [Product.schema],
    quantity: Number,
})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart; 
