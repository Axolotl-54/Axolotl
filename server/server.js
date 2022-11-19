const express = require('express');
const app = express();
const path = require('path');

const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'cards'
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/dist', express.static(path.join(__dirname, '../dist')));


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