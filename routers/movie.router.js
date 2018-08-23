const express = require('express');
const multer = require('multer');
const router = express.Router();
let MovieCtrl = require('../controllers/movie.ctrl');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploadData");
    },
    filename: function (req, file, cb) {

        if (file.originalname.endsWith([".svg"])) {
            cb("Svg file not allowed")
        } else {
            let filename = Date.now() + "-" + file.originalname;
            req.body.Poster = filename;
            cb(null, filename);
        }

    }
});
let upload = multer({
    storage: storage
})





router.get('', MovieCtrl.get);
router.get('/:id', MovieCtrl.getId);
router.post('/', upload.single("Poster"), MovieCtrl.create);
router.delete('/:id', MovieCtrl.delete);
router.patch('/:id', MovieCtrl.update);


module.exports = router;