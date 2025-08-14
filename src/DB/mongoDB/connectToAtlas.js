const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
  .connect("mongodb+srv://qaissi0003:TY30OmQrbAOaR86U@hackeru2.vzfcpxw.mongodb.net/")
  .then(()=>console.log(chalk.bgGreenBright("MongoDB Productions connected successfully")))
  .catch((error)=>{console.error(chalk.red("MongoDB connection failed: ", error.message))});
  