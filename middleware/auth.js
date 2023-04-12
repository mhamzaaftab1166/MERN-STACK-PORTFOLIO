const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("acess denied. no token availabe");
  try {
    const decoded = jwt.verify(token, config.get("jwtpk"));
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).send("invalid token"); //return a b skta n b.
  }
};
