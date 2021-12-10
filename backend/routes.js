const router = require('express').Router();
const authController = require('./controllers/authController')

router.post('/api/send-otp', authController.sendOtp)

module.exports = router