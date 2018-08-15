const express = require('express');
const app = express();

let movieCtrl = require('./controllers/movie.ctrl');


app.listen(8000, callbackFun);


function callbackFun() {
    console.log("Server is running on 8000")
}

function handleAnonymousFun(req, res) {
    res.write('Hello NodeJS');
    res.end();
}


app.get('/', handleAnonymousFun);

app.get('/api/movies', movieCtrl.getMovies)