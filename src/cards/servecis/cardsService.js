const {find,findMyCards,findOne,create,update,like,remove} = require("../models/cardsDataAccessService");
const validateCard = require("../validations/cardValidationService");

exports.getCards = async () => {
    try {
        const cards = await find();
       return Promise.resolve(cards)
    } catch (error) {
    return Promise.reject(cards)
    }
}

exports.getMyCards = async (userId) => {    
    try {
        const card = await findMyCards(userId);
        return Promise.resolve(card)
    } catch (error) {
        return Promise.reject(error)
    }
}

exports.getCard=async (cardId) => {
    try {
        const card = await findOne(cardId);
        return Promise.resolve(card)
    } catch (error) {
        return Promise.reject(error)
    }
}

exports.createCard = async (rawCard) => {
    try {
        const { error } = validateCard(rawCard);
        if(error){
            return Promise.reject(error)
        }
        return Promise.resolve("success");
      //  let card = { ...rawCard };
       // card.createdAt = new Date();    
       // card = await create([card]);
       // return Promise.resolve(card)
    } catch (error) {
        return Promise.reject(error)
    }
}
exports.updateCard = async (cardId, rawCard) => {
    try {
        let card = { ...rawCard };
        card.updatedAt = new Date();
        card = await update(cardId, userId);
        return Promise.resolve(card)
    } catch (error) {
        return Promise.reject(error)
    }
}

exports.likeCard = async (cardId, userId) => {
    try {
        const card = await like(cardId, userId);
        return Promise.resolve(card)
    } catch (error) {
        return Promise.reject(error)
    }
}

exports.deleteCard = async (id) => { 
    try {
        const card = await remove(id);
        return Promise.resolve(card)
    } catch (error) {
        return Promise.reject(error)
    }   
}
