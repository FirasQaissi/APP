const db = process.env.DB || "Database";

exports.find = async () => {
    if (db === "Database") {
        try {
            return Promise.resolve([{id:"1234",name:"card title",data:"7-day free trial"}]);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Not found From DB");
}

exports.findMyCards= async (userId) => {

    if (db === "Database") {
        try {
            return Promise.resolve(` My Cards: ${userId} `);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Not found From DB");
}

exports.findOne = async (cardId) => {
    if (db === "Database") {
        try {
            return Promise.resolve(`Card No: ${cardId}`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Not found From DB");
}

exports.create = async ([{ noramlizedCard }]) => {
    noramlizedCard._id = Date.now();
    if (db === "Database") {
        try {
            return Promise.resolve(`Card Created: ${noramlizedCard}`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Not found From DB");
}

exports.update = async (cardId="00", noramlizedCard=[{cardNo:"123",detials:"AA"}]) => {

if (db === "Database") {
        try {
            return Promise.resolve(`Card Updated: ${noramlizedCard.cardNo} with ID: ${cardId}`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

}

exports.like = async (cardId="00", userId="00") => {

  if (db === "Database"){
    try {
        return promise.resolve(cardNo,cardId + "Liked")
    } catch (error) {
        error.status=404;
        return promise.reject(error)
    }
  }


}

exports.remove = async (cardId="00") => {
    if (db === "Database") {
            try {
                return Promise.resolve(` ${cardNo, "" , cardId} Card Removed:` );
            } catch (error) {
                error.status = 404;
                return Promise.reject(error);
            }
        }
        return Promise.resolve("Not found From DB");
}