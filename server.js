
const express = require("express");
const router = require("../routes/cardController");
const app = express();
const errorHandler = require("./utils/errorHandler");
const chalk = require("chalk");
const cardsController = require("./cards/routes/cardController");
const usersController = require("./users/routes/userController");
const cors = require("./middlewares/cors");

// Middleware - Appl Level
app.use(cors);
app.use(express.json());
app.use(express.text());
app.use(express.static("./public"));
app.use("/cards", cardsController);
app.use("/users", usersController);
app.use(router);


// Error Handler Middleware
app.use((err, req, res, next) => {
  errorHandler(res, err.status || 500, err.message);
});

// http://localhost:8181
const PORT = 8181;
app.listen(PORT, () => {
  console.log("INIT SERVER");
});