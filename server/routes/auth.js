const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/authController')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//registering new user
router.post('/register',AuthController.register)

router.post('/login', AuthController.login)

module.exports = router