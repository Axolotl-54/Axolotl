const Card = require('../models/cardsModel');
// const mongoose = require('mongoose');



const cardController = {
    //create card middleware
    async createCard(req, res, next) {
        try {
            const { newCardName, newCardAssigned, newCardDescription, newCardCategory } = req.body //assuming they call it cardName
            const result = await Card.create( { cardName: newCardName, cardAssigned: newCardAssigned, cardDescription: newCardDescription, cardCategory: newCardCategory });
            res.locals.newCard = result;
            console.log(result);
            return next();
        } catch (err) {
            return next({
                log: 'Express error in cardController.createCard',
                status: 500,
                message: {
                    err: 'An error occured inside the cardController.createCard'
                }
            })
        }
    }
};







module.exports = cardController; //different way of exporting