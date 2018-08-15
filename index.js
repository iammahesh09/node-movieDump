const express = require('express');
const app = express();

//controllers
let movieCtrl = require('./controllers/movie.ctrl');

//Routers
let movieRouter = require('./routers/movie.router');


app.listen(8000, callbackFun);


function callbackFun() {
    console.log("Server is running on 8000");
}

function handleAnonymousFun(req, res) {
    res.write('Hello NodeJS');
    res.end();
}


app.get('/', handleAnonymousFun);

app.use('/api/movies', movieRouter);