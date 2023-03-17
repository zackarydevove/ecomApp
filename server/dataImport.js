const dotenv = require('dotenv').config();
const productData = require('./data/products');
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL);

const productSchema = new mongoose.Schema({
    _id: String,
    name: String,
    price: String,
    description: String,
    image: String,
    type: String,
    group: String,
});

const Product = mongoose.model('Product', productSchema);

const importData = () => {
    Product.deleteMany({});
    Product.insertMany(productData)
    .then((ok) => console.log('Data Import Success'))
    .catch((err) => console.log('Error with data import'));
};

importData();