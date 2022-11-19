const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config()


const MONGO_URI = process.env.MONGO_URI;
const cardController = require('./controllers/cardController.js')

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'test'
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

//all get routes below
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/api/getCards', cardController.findCards, (req, res) => {
    res.status(200).json(res.locals.allCards);
});

//serve static css file for original get request to / for index
// app.get('/styles.css', (req, res) => {
//     res.sendFile(path.join(__dirname,'../client/styles.css'));
// });

// all post routes below
app.post('/api/createCard', cardController.createCard, (req, res) => {
    res.status(200).json(res.locals.newCard);
});

//all patch routes below
app.patch('/api/updateCard', cardController.updateCard, (req, res) => {
    res.status(200).json(res.locals.updatedCard);
});


app.use((err, req, res, next) => {
    const defErr = {
        log: 'Caught middleware error',
        status: 500,
        mess: {err: 'an error occured'}
    };
    const errorObj = Object.assign({}, defErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.mess);
})

app.listen(3000, console.log('listening on 3000...'));