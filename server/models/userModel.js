const mongoose = require('mongoose');
const Cart = require('./cartModel');
const History = require('./historyModel');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    cart: [Cart.schema],
    history: [History.schema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;