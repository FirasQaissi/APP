
const express = require("express");
const router = require("./src/cards/routes/cardController");
const app = express();
const errorHandler = require("./src/utlis/errorHandler");
const chalk = require("chalk");
const cardsController = require("./src/cards/routes/cardController");
const usersController = require("./src/users/routes/usersController");
const cors = require("./src/middlewares/cors");
const logger = require("./src/logger/loggerService");

// Middleware - Appl Level
app.use(cors);
app.use(logger)
app.use(express.json());
app.use(express.text());
app.use(express.static("./public"));
app.use("/cards", cardsController);
app.use("/users", usersController);
app.use(router);


app.get('/', (req , res) => {
    res.send("Hello From Server");  
})


//const PORT = 3000;
//app.listen(PORT, () => {
//  console.log(chalk.green(`Server is running on http://localhost:${PORT}`));
//});

// Error Handler Middleware
app.use((err, req, res, next) => {
errorHandler(res, err.status || 500, err.message);
});

// http://localhost:8181
const PORT =  process.env.PORT|| 8181;
app.listen(PORT, () => {
 console.log("INIT SERVER");
});