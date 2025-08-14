const Env = "production";

const connectToDb = () => {

if (Env === "development") {
    require("./mongoDB/connectLocally");    

}
if (Env === "production") {
    require("./mongoDB/connectToAtlas");
}
}

module.exports = connectToDb;