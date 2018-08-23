const mongoose = require('mongoose');

module.exports = mongoose.model('ratting', {
    "title": {
        type: String,
        require: [true, "Title is required"]
    },
    "subject": {
        type: String,
        require: [true, "Subject is required"]
    },
    "rating": {
        type: Number,
        require: [true, "Value is required"]
    },
    lastUpdate: {
        type: Date,
        defalut: Date.now
    }
})