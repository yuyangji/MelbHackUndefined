const User = require('../models/user')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')



const register = async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        password: hashedPassword
      });
    
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }

};


module.exports = {
    register,

}