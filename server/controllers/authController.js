const User = require('../models/user')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const login = async (req, res) => {
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
                req.session.user_id = user._id;
                res.status(201).json({message:"logged in", token, user})
            }
       
        }else{
            res.status(404).json({message: "username does not exist"})
        }
    }catch(err){
        res.status(400).json({message:err.message })
    }
}
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
    register, login

}