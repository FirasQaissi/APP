// errorHandler.js
const chalk = require("chalk");

const errorHandler = (res, status, message = "") => {
  console.error(chalk.red(message));
  res.status(status).send(message);
};

module.exports = errorHandler;
