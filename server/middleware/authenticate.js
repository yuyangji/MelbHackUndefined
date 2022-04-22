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
    res.status(401).json({ message: "invalid token" });
  }
  return next();
};

const checkDuplicateUsername = (req, res, next) => {
    User.findOne({
        username: req.body.username
      }).exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        if (user) {
          res.status(400).send({ message: "username taken" });
          return;
        }
        next();
      });
}

module.exports = authenticate;
