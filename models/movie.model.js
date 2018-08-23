const mongoose = require('mongoose');

module.exports = mongoose.model('movies', {
    "Title": {
        type: String,
        require: [true, "Title is required"]
    },
    "Year": {
        type: String,
        require: [true, "Year is required"]
    },
    "Rated": {
        type: String
    },
    "Runtime": {
        type: String
    },
    "Genre": {
        type: Array,
        require: [true, "Genre is required"]
    },
    "Director": {
        type: Array,
        require: [true, "Director is required"]
    },
    "Writer": {
        type: Array,
        require: [true, "Writer is required"]
    },
    "Actors": {
        type: Array,
        require: [true, "Actors is required"]
    },
    "Plot": {
        type: String,
        require: [true, "Plot is required"]
    },
    "Language": {
        type: Array,
        require: [true, "Language is required"]
    },
    "Country": {
        type: Array,
        require: [true, "Country is required"]
    },
    "Awards": {
        type: Array
    },
    "Poster": {
        type: String
    },
    "Metascore": {
        type: String
    },
    "imdbRating": {
        type: String,
        require: [true, "IMDB Rating is required"]
    },
    "imdbVotes": {
        type: String
    },
    "Type": {
        type: String,
        require: [true, "Type is required"]
    },
    "DVD": {
        type: String
    },
    "BoxOffice": {
        type: String
    },
    "Production": {
        type: String
    },
    "Website": {
        type: String
    },
    "Response": {
        type: Boolean
    },
    "lastUpdated": {
        type: Date,
        default: Date.now
    }

})