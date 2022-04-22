const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/authController')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//registering new user
router.post('/register',AuthController.register)

router.post('/login', async (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    try{
        const user = await User.findOne({username:username})
        if(user){
            var pswValid = await bcrypt.compare(password, user.password)
            if(!pswValid){
                res.status(401).json({ message: "Invalid Password!" });
            }else{
                let token = jwt.sign({name:user.username},
                            process.env.TOKEN_KEY,
                            {expiresIn:'2h'})
                req.session.token = token;
                res.status(201).json({message:"logged in", token})
            }
       
        }else{
            res.status(404).json({message: "username does not exist"})
        }
    }catch(err){
        res.status(400).json({message:err.message })
    }
}
   
)
module.exports = router