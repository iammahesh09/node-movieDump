const mongoose = require('mongoose');

module.exports = mongoose.model('Movie', {
    Title: {
        type: String,
        require: [true, "Title is required"]
    },
    Year: {
        type: String,
        require: [true, "Year is required"]
    },
    imdbID: {
        type: String,
        require: [true, "imdbID is required"]
    },
    Type: {
        type: String,
        require: [true, "Type is required"]
    },
    Poster: {
        type: String,
        require: [true, "Poster is required"]
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    },
})