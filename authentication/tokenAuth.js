const jwt = require('jsonwebtoken');
const config = require('../configMongoDB');
module.exports = {
    tokenAuth: function (req, res, next) {
        let token = req.headers["authorization"];
        let result = jwt.verify(token, config.jwtPassword, function (error) {
            if (error) {
                res.status(400);
                res.send("Unauthorised")
            } else {
                next();
            }
        })
    }
}