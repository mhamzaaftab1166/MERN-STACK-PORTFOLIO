const config = require("config");

module.exports = function () {
  a = config.get("jwtpk");
  console.log(a);
  if (!config.get("jwtpk")) {
    throw new Error("fatal error: jwtpk is not defined.");
  }
};
