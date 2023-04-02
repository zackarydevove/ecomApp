const User = require('../models/userModel');
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');
const History = require('../models/historyModel');
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const jwt = require('jsonwebtoken');
const productData = require('../data/products');

const CLIENT_URL = process.env.CLIENT_URL;

// Add product in cart
module.exports.cart = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    User.findById(userId)
    .then((user) => {
        if (!user) {
            res.send('not login');
        } else {
            Product.findOne({_id: req.body.id})
            .then((product) => {
                console.log('product in controler:', product);
                // Function to send updated user
                const updateUserCart = () => {
                    User.findById(userId).then(updatedUser => {
                        res.send(updatedUser);
                    });
                };
                // Check if product is already in cart
                const index = user.cart.findIndex(item => item.product[0] && item.product[0]._id === product._id);
                if (index === -1) { // Product is not in the cart
                    const newCart = new Cart({
                        product: product,
                        quantity: 1,
                    })
                    User.updateOne(
                        { email: user.email },
                        { $push: { cart: newCart } }
                    )
                    .then((result) => {
                        console.log(result)
                        updateUserCart();
                    })
                    .catch((err) => console.log(err));
                } else {    // Product is in the cart, just add quantity
                    user.cart[index].quantity++
                    user.save()
                    .then((result) => {
                        console.log(result)
                        updateUserCart();
                    })
                    .catch((err) => console.log(err));                
                }
            })
            .catch((err) => console.log(err));
        }
    })
};

// Delete an item from the cart
module.exports.deleteCart = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    User.findOneAndUpdate(
        { _id: userId },
        { $pull: { cart: { _id: req.body.id } } }
    )
    .then((updatedUser) => res.send(updatedUser))
    .catch((err) => console.log(err))
};

// Add an item in the cart
module.exports.addCart = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    User.findById(userId)
    .then((user) => {
        user.cart[req.body.index].quantity += req.body.add;
        user.save()
        .then((updatedUser) => res.send(updatedUser))
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err));
};

// Stripe payment
module.exports.checkout = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const session = stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: req.body.cart.map(item => {
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.product[0].name
                    },
                    unit_amount: item.product[0].price
                },
                quantity: item.quantity
            }
        }),
        success_url: `${CLIENT_URL}/success`,
        cancel_url: `${CLIENT_URL}/cancel`
    })
    .then((response) => {
        console.log(response);
        if (response.success_url === `${CLIENT_URL}/success`) {
            User.findById(userId)
            .then((user) => {
                const newHistory = new History ({
                    _id: user._id,
                    date: Date.now(),
                    cart: user.cart,
                })
                User.updateOne(
                    { email: user.email },
                    { $push: { history: newHistory } }
                )
                .then((result) => console.log(result))
                .catch((err) => console.log(err));
                User.updateOne(
                    { email: user.email },
                    { $pull: { cart: { } } }
                )
                .then((result) => console.log(result))
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        }
        res.send({url : response.url });
    })
    .catch((err) => console.log(err));
};

module.exports.products = (req, res) => {
    res.send(productData)
};