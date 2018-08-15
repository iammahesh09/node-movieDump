const express = require('express');
const app = express();
const mongoose = require('mongoose');

const configMongo = require('./configMongoDB');


//controllers
let movieCtrl = require('./controllers/movie.ctrl');

//Routers
let movieRouter = require('./routers/movie.router');

//Node Server Connect
let PORT = process.env.PORT || 8000
app.listen(PORT, callbackFun);

//MongoDB Connect
mongoose.connect(configMongo.connectUrl, {
    useNewUrlParser: true
}, () => console.log("DB Conneted"));


function callbackFun() {
    console.log(`Hello! NodeJS, Server is running on port ${PORT}`);
}

function handleAnonymousFun(req, res) {
    res.write('Hello NodeJS');
    res.end();
}


app.get('/', handleAnonymousFun);

app.use('/api/movies', movieRouter);