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
    },
    
    async findCards(req, res, next) {
        try{
            const result = await Card.find({});//might need to change to no parameters to get all
            res.locals.allCards = result;
            console.log('returned', result)
            return next()
        } catch(err){
            err.log = 'Expressor error in carController findCards';
            err.status = 500;
            err.message = {err: 'Expressor error in carController findCards'};
            return next(err);
        }
    }

};







module.exports = cardController; //different way of exporting