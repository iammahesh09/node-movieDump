const Movie = require('../models/movie.model')

const movieCtrl = {

    getMovies: (req, res) => {

        Movie.find(function (error, movies) {

            if (error) {
                res.send("Internal Server Error");
            } else {
                res.status(200);
                res.json(movies);
            }

        })
    }

}
module.exports = movieCtrl;