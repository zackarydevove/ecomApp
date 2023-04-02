const mongoose = require('mongoose');
const Cart = require('./cartModel');

const historySchema = new mongoose.Schema({
    _id: String,
    date: Date,
    cart: [Cart.schema],
})


const History = mongoose.model('History', historySchema);

module.exports = History;