process.env.NODE_ENV = "production";
const express = require("express");
const app = express();
const winston = require("winston");
require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT || 3500;
let server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
module.exports = server;
