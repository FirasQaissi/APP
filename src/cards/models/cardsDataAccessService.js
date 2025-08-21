const { handleBadRequest } = require("../../utlis/handleErrors");
const Card = require("../models/mongodb/Card");

const db = process.env.db || "MONGODB";


const find = async () => {
  try {
    // אם המקור הוא MONGODB
    if (db === "MONGODB") {
      // שליפת כל הכרטיסים ממונגו
      const cards = await Card.find();

      // אם אין כרטיסים - זרוק שגיאה עם סטטוס 404
      if (!cards || cards.length === 0) {
        const error = {
          message: "No cards found",
          status: 404,
        };
        return handleBadRequest(error);
      }

      // אם הכל בסדר, החזר את הכרטיסים
      return Promise.resolve(cards);
    }

    // אם db לא שווה ל-MONGODB
    return Promise.resolve("value only - no DB connected");
  } catch (error) {
    // תפיסת שגיאה והפעלה של handleBadRequest
    return handleBadRequest(error);
  }
};


const findMyCards = async (userId) => {
  if (db === "MONGODB") {
    try {
      return Promise.resolve(`my cards: ${userId}`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get card not in database");
};

const findOne = async (cardId) => {
  if (db === "MONGODB") {
    try {
      return Promise.resolve(`in findOne card no: ${cardId}`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get card not in database");
};

const create = async (normalizedCard) => {
  if (db === "MONGODB") {
    try {
      let card = new Card(normalizedCard);
      card = await card.save();
      return Promise.resolve(card);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("create card not in database");
};

const update = async (cardId, normalizedCard) => {
  if (db === "MONGODB") {
    try {
      return Promise.resolve(`in update card no. ${cardId}`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card update not in database");
};

const like = async (cardId, userId) => {
  if (db === "MONGODB") {
    try {
      return Promise.resolve(`card no. ${cardId} liked!`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card liked not in database");
};

const remove = async (cardId) => {
  if (db === "MONGODB") {
    try {
      return Promise.resolve(`card no. ${cardId} deleted!`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card deleted not in database");
};

module.exports = { find, findMyCards, findOne, create, update, like, remove };