const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express')
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const dotenv = require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const productData = require('./data/products');
const MongoStore = require('connect-mongo');


mongoose.connect(process.env.MONGODB_URL);

// Middleware

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: 'https://ecom-app-tan.vercel.app',
    credentials: true
}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ 
      mongoUrl: process.env.MONGODB_URL,
      collectionName: 'sessions',
      ttl: 3600,
      autoRemove: 'interval',
      autoRemoveInterval: 10
    })
}));
app.use(cookieParser(process.env.SESSION_SECRET));

app.use(passport.initialize());
app.use(passport.session());


// MongoDB


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


const cartSchema = new mongoose.Schema({
    product: productSchema,
    quantity: Number,
})

const Cart = mongoose.model('Cart', cartSchema);

const historySchema = new mongoose.Schema({
    _id: String,
    date: Date,
    cart: [cartSchema],
})

const History = mongoose.model('History', historySchema);


const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    cart: [cartSchema],
    history: [historySchema]
});

const User = mongoose.model('User', userSchema);


// Passport

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ['profile', 'email'],
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOne({ googleId: profile.id })
        .then((user) => {
            if (user) {
                return cb(null, user);
            } else {
                const newUser = new User({
                    email: profile.displayName,
                    googleId: profile.id
                });
                console.log(profile.displayName);
                newUser.save();
            }
        })
        .catch((err) => cb(err));
    }
));

passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
        User.findOne({ email })
        .then((user) => {
            console.log(user);
            if (!user) {
                return done(null, false, { message: 'Incorrect email or password.' });
            }
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    return done(err);
                }
                if (result === true) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Incorrect email or password.' });
                }
            })
        })
        .catch((err) => {
            console.log(err);
            done(err);
        })
    })
)

passport.serializeUser((user, cb) => { 	// Store a cookie in browser
    cb(null, user.id);				// and store this data in the cookie
}) 

passport.deserializeUser((id, cb) => { 	// Open the cookie to get the data inside
    User.findOne({_id: id})
    .then((user) => {
        cb(null, user);
    }) 
    .catch((err) => { 
        cb(err, null);
    });
})



// Routes

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', // callback
  passport.authenticate('google', { 
    failureRedirect: 'https://ecom-app-tan.vercel.app/login', 
    successRedirect: 'https://ecom-app-tan.vercel.app/shop'
    })
);

app.post('/register', (req, res) => {
    User.findOne({email: req.body.email})
    .then((user) => {
        if (user) {
            res.send('Email already used!');
        } else {
            if (req.body.password === req.body.confirmPassword) {
                bcrypt.hash(req.body.password, 10)
                .then((hashedPassword) => {
                    const newUser = new User({
                        email: req.body.email,
                        password: hashedPassword
                    })
                    newUser.save()
                    .then((response) => console.log(response))
                    .catch((err) => console.log(err));
                    res.send('User successfully created!');
                })
                .catch((err) => console.log(err));
            } else {
                res.send('Password doesnt match');
            }
        }
    })
    .catch((err) => console.log(err));
})

app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        console.log(info);
        if (err) return (next(err));
        if (!user) return (res.send('no user exists'));
        req.logIn(user, (err) => {
            if (err) return (next(err));
            res.send('Successfully Authenticated');
            console.log(req.user);              
        })
    }) (req,res,next);
})

app.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) console.log(err);
        else res.send('Logout successfully');
    });
});

// req.user contain all the data in of user in the cookie
app.get('/user', (req, res) => {
    res.send(req.user);
})

// Check if user is authenticate, if not redirect him to /login
app.get('/', (req, res) => {
    if (!req.user) {
        res.redirect('https://ecom-app-tan.vercel.app/login');
    }
})



// shop

app.post('/cart', (req, res) => {
    if (!req.user) {
        res.send('not login');
    } else {
        Product.findOne({_id: req.body.id})
        .then((product) => {
            const index = req.user.cart.findIndex(item => item.product._id === product._id);
            if (index === -1) { // Product is not in the cart
                const newCart = new Cart({
                    product: product,
                    quantity: 1,
                })
                User.updateOne(
                    { email: req.user.email },
                    { $push: { cart: newCart } }
                )
                .then((result) => console.log(result))
                .catch((err) => console.log(err));
            } else {    // Product is in the cart, just add quantity
                req.user.cart[index].quantity++
                req.user.save()
                .then((result) => console.log(result))
                .catch((err) => console.log(err));                
            }
        })
        .catch((err) => console.log(err));
    }
});

app.post('/cart/delete', (req, res) => {
    User.findOneAndUpdate(
        { email: req.user.email },
        { $pull: { cart: { _id: req.body.id } } }
    )
    .then((updatedUser) => res.send(updatedUser))
    .catch((err) => console.log(err))
});

app.post('/cart/add', (req, res) => {
    req.user.cart[req.body.index].quantity += req.body.add;
    req.user.save()
    .then((updatedUser) => res.send(updatedUser))
    .catch((err) => console.log(err))
})

app.post('/checkout', (req, res) => {
    const session = stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: req.body.cart.map(item => {
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.product.name
                    },
                    unit_amount: item.product.price
                },
                quantity: item.quantity
            }
        }),
        success_url: 'https://ecom-app-tan.vercel.app/success',
        cancel_url: 'https://ecom-app-tan.vercel.app/cancel'
    })
    .then((response) => {
        console.log(response);
        if (response.success_url === 'https://ecom-app-tan.vercel.app/success') {
            const newHistory = new History ({
                _id: req.user._id,
                date: Date.now(),
                cart: req.user.cart,
            })
            User.updateOne(
                { email: req.user.email },
                { $push: { history: newHistory } }
            )
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
            User.updateOne(
                { email: req.user.email },
                { $pull: { cart: { } } }
            )
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
        }
        res.send({url : response.url });
    })
    .catch((err) => console.log(err));
})

app.get('/products', (req, res) => {
    res.send(productData)
})

app.listen(5000, () => 'Server is listening to Port 5000');