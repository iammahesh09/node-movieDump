const express = require('express');
const app = express();

app.listen(8000, callbackFun);

app.get('/', handleAnonymousFun)

function callbackFun() {
    console.log("Server is running on 8000")
}

function handleAnonymousFun(req, res) {
    res.write('Hello NodeJS');
    res.end();
}