const router = require('express').Router();
const jwtAuth = require('../middleware/jwtAuth');
const { login, register, getUser } = require ('../controllers/auth');

// router.get('/google', googleAuth);
// router.get('/google/callback', googleCallback);

router.post('/login', login);
router.post('/register', register);

router.get('/user', jwtAuth, getUser);


module.exports = router;