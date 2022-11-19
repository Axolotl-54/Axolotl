const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
<<<<<<< HEAD
=======
require('dotenv').config()
>>>>>>> dev

const MONGO_URI = process.env.MONGO_URI;
const cardController = require('./controllers/cardController')

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

app.post('/api/createCard', cardController.createCard, (req, res) => {
    res.status(200).json(res.locals.newCard);
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