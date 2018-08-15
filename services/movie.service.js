const Movie = require('../models/movie.model');

class movieService {

    getMovies() {
        return Movie.find().exec();
    }

    createMovie(data) {
        return Movie.create(data)
    }

}

module.exports = new movieService();