const morgan = require("morgan");
const chalk = require("chalk");

app.use(
    morgan((tokens, req, res) => {
        if (res.statusCode >= 500) {
            return [
                chalk.redBright(tokens.method(req, res)),
                chalk.redBright(tokens.url(req, res)),
                chalk.redBright(tokens.status(req, res)),
                chalk.redBright(tokens.res(req, res, "content-length")),
                chalk.redBright(tokens["response-time"](req, res), "ms"),
            ].join(" ");
                }else{
                    return[
                        chalk.cyanBright(tokens.method(req, res)),
                        chalk.cyanBright(tokens.url(req, res)),
                        chalk.cyanBright(tokens.status(req, res)),
                        chalk.cyanBright(tokens.res(req, res, "content-length")),
                        chalk.cyanBright(tokens["response-time"](req, res), "ms"),
                    ]
                }
                // You can add an 'else' block or a default return if needed
            })
        );
module.exports = app;
