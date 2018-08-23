const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/review.ctrl');

router.get('/', reviewCtrl.read);
router.patch('/:id', reviewCtrl.updateReview);
router.post('/write', reviewCtrl.write);
router.delete('/:id', reviewCtrl.deleteReview);

module.exports = router;