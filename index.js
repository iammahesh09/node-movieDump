const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const config = require('./configMongoDB');

app.use(bodyParser.json());

mongoose.connect(config.connectUrl, {
    useNewUrlParser: true
}, () => console.log("DB Conneted"));

//controllers
let movieCtrl = require('./controllers/movie.ctrl');

//Routers
let movieRouter = require('./routers/movie.router');
//Review Router
const reviewRouter = require('./routers/review.router');

app.use(cors())

//Token authorization
const middleware = require('./authentication/tokenAuth')

//user router
const authRouter = require('./routers/auth.router');



//Public
app.get('/', handleAnonymousFun);

//this is User Login Verify middleware
app.use('/api/auth', authRouter)

//Use call middleware
app.use(middleware.tokenAuth)

//Private
app.use('/api/movies', movieRouter);

//Private
app.use('/api/reviews', reviewRouter)



//Connect Server
let PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Hello! ExpressJS, Server is running on port ${PORT}`));


function handleAnonymousFun(req, res) {
    res.write('Hello NodeJS');
    res.end();
}