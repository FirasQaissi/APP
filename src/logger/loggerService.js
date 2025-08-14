const morgan = require("morgan");
const express = require("express");
const app = express();
const chalk = require("chalk");

// Logger Middleware    


const LOGGER = "mogran"

if (LOGGER === "morgan") app.use(morganLogger)
   

module.exports = app;
