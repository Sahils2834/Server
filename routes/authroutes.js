const express = require('express');
const router = express.Router();
const auth = require('../middleware/authmiddleware');
const { register, login, getProfile } = require('../controllers/authcontrollers');

router.post('/register', register);
router.post('/login', login);
router.get('/protected', auth, getProfile);

module.exports = router;