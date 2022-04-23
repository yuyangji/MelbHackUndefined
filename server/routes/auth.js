const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/authController')
const {checkDuplicateUsername} = require('../middleware/authenticate')
//registering new user
router.post('/register', checkDuplicateUsername, AuthController.register)

router.post('/login', AuthController.login)

router.post('/logout', AuthController.logout)

module.exports = router