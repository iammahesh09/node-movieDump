const express = require('express');
const router = express.Router();
let MovieCtrl = require('../controllers/movie.ctrl');

router.get('', MovieCtrl.get);
router.get('/:id', MovieCtrl.getId);
router.post('/create', MovieCtrl.create);
router.delete('/:id', MovieCtrl.delete);
router.patch('/:id', MovieCtrl.update);


module.exports = router;