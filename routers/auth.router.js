const exprees = require('express');
const router = exprees.Router();
const authCtrl = require('../controllers/auth.ctrl');

router.post('/register', authCtrl.register)
router.post('/login', authCtrl.login)

module.exports = router;