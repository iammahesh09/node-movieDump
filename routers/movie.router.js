const express = require('express');
const routes = express.Router();
let MovieCtrl = require('../controllers/movie.ctrl');

routes.get('', MovieCtrl.getMovies);


module.exports = routes;