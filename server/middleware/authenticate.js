const jwt = require("jsonwebtoken");
const User = require('../models/user')

const authenticate = (req, res, next) => {
    let token = req.session.token;
 
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {

    const decode = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decode;
    

  } catch (err) {
    return res.status(401).json({ message: "invalid token" });
  }
  return next();
};

const checkDuplicateUsername = async (req, res, next) => {
  var username = req.body.username;

  try{
    const user = await User.findOne({ username: username });

    if (user) {
      res.status(500).send({ message: "username taken" });
      return;
    }
    next();
  
  }catch(err){
    return res.status(400).json({ message: err.message });
  }
}

module.exports = {
    authenticate,
    checkDuplicateUsername
}
