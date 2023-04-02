const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const CLIENT_URL = process.env.CLIENT_URL;

// module.exports.googleAuth = passport.authenticate('google', { scope: ['profile'] });

// module.exports.googleCallback = passport.authenticate('google', { 
//     failureRedirect: `${CLIENT_URL}/login`, 
//     successRedirect: `${CLIENT_URL}/shop`
//  });

module.exports.register = (req, res) => {
    const { email, password, confirmPassword} = req.body;

    User.findOne({email: email})
    .then((user) => {
        if (user) {
            res.status(200).json({ message: 'Email already used!' });
        } else {
            if (password === confirmPassword) {
                bcrypt.hash(req.body.password, 10)
                .then((hashedPassword) => {
                    const newUser = new User({
                        email: email,
                        password: hashedPassword
                    })
                    newUser.save()
                    .then((response) => {
                        console.log('new user created:\n', response, '\n');
                        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET)
                        res.status(200).json({ token: token, message: 'User successfully created and authenticated' });
                    })
                    .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
            } else {
                res.status(401).json({message: 'Password doesnt match'});
            }
        }
    })
    .catch((err) => console.log(err));
}

module.exports.login = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
      .then(user => {
        if (!user) {
            console.log('User not found')
            return res.status(401).json({ message: 'Authentication failed' });
        }
        console.log('User found:', user);
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if (isMatch) {
                console.log(user, 'Successfully Authenticated')
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
                res.status(200).json({ token: token, message: 'Successfully Authenticated' });
            } else {
                console.log('Wrong password')
                res.status(401).send('Authentication failed');
            }
          });
      })
      .catch(err => {
        res.status(500).json({ message: 'Internal server error' });
      });
}

// Get current user information
module.exports.getUser =  (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    User.findById(userId)
    .then((user) => {
        if (!user) {
            res.status(401).send('User not found');
        } else {
            console.log('user in getUser:', user);
            res.status(200).send(user);
        }
    })
    .catch((err) => {
          console.log(err);
          res.status(500).send('Internal server error');
    });
}