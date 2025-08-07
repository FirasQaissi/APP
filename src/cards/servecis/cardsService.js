const {find,findMyCards,findOne,create,update,like,remove} = require("../models/cardsDataAccessService");


exports.getCards = async () => {
    try {
        const cards = await find();
       return promise.resolve(cards)
    } catch (error) {
    return promise.reject(cards)
    }
}

exports.getMyCards = async (userId) => {    
    try {
        const card = await findMyCards(userId);
        return promise.resolve(card)
    } catch (error) {
        return promise.reject(error)
    }
}

exports.getCard=async (cardId) => {
    try {
        const card = await findOne(cardId);
        return promise.resolve(card)
    } catch (error) {
        return promise.reject(error)
    }
}

exports.createCard = async (rawCard) => {
    try {
        let card = { ...rawCard };
        card.createdAt = new Date();    
        card = await create([card]);
        return promise.resolve(card)
    } catch (error) {
        return promise.reject(error)
    }
}
exports.updateCard = async (cardId, rawCard) => {
    try {
        let card = { ...rawCard };
        card.updatedAt = new Date();
        card = await update(cardId, userId);
        return promise.resolve(card)
    } catch (error) {
        return promise.reject(error)
    }
}

exports.likeCard = async (cardId, userId) => {
    try {
        const card = await like(cardId, userId);
        return promise.resolve(card)
    } catch (error) {
        return promise.reject(error)
    }
}

exports.deleteCard = async (id) => { 
    try {
        const card = await remove(id);
        return promise.resolve(card)
    } catch (error) {
        return promise.reject(error)
    }   
}
