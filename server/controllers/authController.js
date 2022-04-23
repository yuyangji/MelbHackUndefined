const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//CREATE SESSION
const createSession = (user, req, res)=>{
  let token = jwt.sign({ name: user.username }, process.env.TOKEN_KEY, {
    expiresIn: "48h",
  });
  //Cookie session variables.
  req.session.token = token;
  req.session.user_id = user._id;
  req.session.username = user.username;
  res.status(201).json({ message: "logged in", token, user });
}


//LOGIN USER
const login = async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;


  try {
    //Check to see if can find user with username
    const user = await User.findOne({ username: username });
    if (user) {
      //compare password with given password and user password.
      var pswValid = await bcrypt.compare(password, user.password);

      return !pswValid ? 
      res.status(401).json({ message: "Invalid Password!" })
      :createSession(user, req, res);

    } else {
      //No user found with given username.
      return res.status(409).json({ message: "username does not exist" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


//REGSITER USER
const register = async (req, res) => {
  //Hash the password for security
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  //Create user with hasehd password.
  const user = new User({
    username: req.body.username,
    password: hashedPassword,
  });

  try {
    const newUser = await user.save();
    return createSession(newUser, req, res);
  } catch (err) {
    //Failed for some reason.
    return res.status(400).json({ message: err.message });
  }
};


//LOGOUT USER
const logout = async (req, res) => {
  try {
    req.session = null;
    res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    res.status(200).send({ message: "error signing out" });
  }
};

module.exports = {
  register,
  login,
  logout,
};
