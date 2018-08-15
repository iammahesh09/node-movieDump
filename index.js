const express = require('express');
const app = express();
const mongoose = require('mongoose');

const configMongo = require('./configMongoDB');


//controllers
let movieCtrl = require('./controllers/movie.ctrl');

//Routers
let movieRouter = require('./routers/movie.router');

//Node Server Connect
app.listen(8000, callbackFun);

//MongoDB Connect
mongoose.connect(configMongo.connectUrl, {
    useNewUrlParser: true
}, () => console.log("DB Conneted"));


function callbackFun() {
    console.log("Server is running on 8000");
}

function handleAnonymousFun(req, res) {
    res.write('Hello NodeJS');
    res.end();
}


app.get('/', handleAnonymousFun);

app.use('/api/movies', movieRouter);