const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//okay to remove deleted comments saying hi

//creating DB schema

const cardSchema = new Schema ({
    cardName: { type: String, required: true },
    cardAssigned: String,
    cardDescription: String,
    cardCategory: String,
})

//if want users to be in DB, can create user schema below and export


const Card = mongoose.model('card', cardSchema)
module.exports = Card;