const express = require('express')
const configureMiddleware = require('./middleware/middleware');
const connectToDatabase = require('./config/database');
const PORT = process.env.port || 5000;
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

const app = express();

connectToDatabase();
configureMiddleware(app);

app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);

app.listen(5000, () => 'Server is listening to Port 5000');