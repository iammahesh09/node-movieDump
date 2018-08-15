const Movie = require('../models/movie.model');

class movieService {

    getMovies() {
        return Movie.find({}, {
            __v: 0
        }).exec();
    }

    getMovieId(id) {
        return Movie.findById(id, {
            __v: 0
        }).exec();
    }

    createMovie(data) {
        return Movie.create(data)
    }

    deleteMovie(id) {
        return Movie.findByIdAndRemove(id).exec()
    }

    updateMovie(id, data) {
        Movie.findById(id, function (err, movie) {
            if (movie) {
                for (var key in data) {
                    movie[key] = data[key];
                }
                return Movie.findByIdAndUpdate(id, movie).exec();
            }
        });
    }

    getCount() {
        return Movie.count().exec();
    }

}

module.exports = new movieService();