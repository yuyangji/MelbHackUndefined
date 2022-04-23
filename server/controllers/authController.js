const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Login with username and password.
const login = async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  try {
    //Check to see if can find user with username
    const user = await User.findOne({ username: username });
    if (user) {
      //compare password with given password and user password.
      var pswValid = await bcrypt.compare(password, user.password);
      if (!pswValid) {
        res.status(401).json({ message: "Invalid Password!" });
      } else {
        let token = jwt.sign({ name: user.username }, process.env.TOKEN_KEY, {
          expiresIn: "2h",
        });
        //Cookie session variables.
        req.session.token = token;
        req.session.user_id = user._id;
        res.status(201).json({ message: "logged in", token, user });
      }
    } else {
      //No user found with given username.
      res.status(404).json({ message: "username does not exist" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
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
    res.status(201).json(newUser);
  } catch (err) {
    //Failed for some reason.
    res.status(400).json({ message: err.message });
  }
};

const logout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    return res.status(200).send({ message: "error signing out" });
  }
};

module.exports = {
  register,
  login,
  logout,
};
