const http = require('http');

const server = http.createServer(handleAnonymousFun)

function handleAnonymousFun(req, res) {
    res.write('Hello NodeJS');
    res.end();
}

server.listen(8000, callback)

function callback() {
    console.log("Server is running on 8000")
}