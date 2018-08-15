const express = require('express');
const router = express.Router();
let MovieCtrl = require('../controllers/movie.ctrl');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploadData");
    },
    filename: function (req, file, cb) {
        let filename = Date.now() + "-" + file.originalname;
        req.body.Poster = filename;
        cb(null, filename);
    }
});
var upload = multer({
    storage: storage
})





router.get('', MovieCtrl.get);
router.get('/:id', MovieCtrl.getId);
router.post('/create', upload.single("Poster"), MovieCtrl.create);
router.delete('/:id', MovieCtrl.delete);
router.patch('/:id', MovieCtrl.update);


module.exports = router;