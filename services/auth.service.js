const authUser = require('../models/auth.model');
class authService {
    registration(data) {
        let _user = new authUser(data);
        return _user.save();
    }
    login(data) {
        return authUser.findOne({
            username: data
        }, {
            _id: 0,
            password: 1
        }).exec()
    }
}

module.exports = new authService();