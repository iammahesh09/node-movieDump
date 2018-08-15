const express = require('express');
const routes = express.Router();
let MovieCtrl = require('../controllers/movie.ctrl');

routes.get('', MovieCtrl.get);
routes.post('/create', MovieCtrl.create);


module.exports = routes;