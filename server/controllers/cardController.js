const Card = require('../models/cardsModel');
// const mongoose = require('mongoose');



const cardController = {
    //create card middleware
    async createCard(req, res, next) {
        console.log('clicked create card');
        try {
            const { newCardName, newCardAssigned, newCardDescription, newCardCategory } = req.body //assuming they call it cardName
            const result = await Card.create({ cardName: newCardName, cardAssigned: newCardAssigned, cardDescription: newCardDescription, cardCategory: newCardCategory });
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
        try {
            const result = await Card.find({});//might need to change to no parameters to get all
            res.locals.allCards = result;
            console.log('returned', result)
            return next()
        } catch (err) {
            err.log = 'Expressor error in carController findCards';
            err.status = 500;
            err.message = { err: 'Expressor error in carController findCards' };
            return next(err);
        }
    },


    async updateCard(req, res, next) {
        console.log('inside updateCard middleware');
        try {
            const { cardToUpdate, assignToUpdate, descriptionToUpdate, categoryToUpdate } = req.body; //tell them cardToUpdate;
            const result = await Card.findOneAndUpdate({ cardName: cardToUpdate }, { cardName: cardToUpdate, cardAssigned: assignToUpdate, cardDescription: descriptionToUpdate, cardCategory: categoryToUpdate }, { new: true });
            if (!result) { //if query goes through and can't find, need specific error
                const err = { message: {err: 'Cannot update card if we cannot find card to update!' }}
                return next(err);
            };
            res.locals.updatedCard = result;
            console.log('updated card?', result)
            return next();
        } catch {
            return next({
                log: 'Express error in cardController.updateCard',
                status: 500,
                message: {
                    err: 'An error occured inside the cardController.updateCard'
                }
            })
        }
    },


    // cardAssigned: String,
    // cardDescription: String,
    // cardCategory


    async deleteCard(req, res, next) {
        console.log('in delete middleware');
        try {
            const { cardNameToDelete } = req.body;
            const deletedCard = await Card.findOneAndDelete({ cardName: cardNameToDelete });
            if (!deletedCard) { //if query goes through and can't find, need specific error
                const err = { message: {err: 'Cannot delete card if we cannot find card!' }}
                return next(err);
            };
            res.locals.deletedCard = deletedCard;
            console.log('deleted card', deletedCard);
            return next();
        } catch (err) {
            err.log = 'Expressor error in carController deleteCard';
            err.status = 500;
            err.message = { err: 'Expressor error in carController deleteCard' };
            return next(err);
        }
    }

};







module.exports = cardController; //different way of exporting