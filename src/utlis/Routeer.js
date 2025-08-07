const express = require("express");
const app = express();
const chalk = require("chalk");
const router = express.Router();
app.use(express.json());

const handleError = require("./errorHandler");



router.get("/", (req, res,next) => {
    console.log(chalk.red("Get Call From Root"));
   next(); 
});

app.use("/cards",router);