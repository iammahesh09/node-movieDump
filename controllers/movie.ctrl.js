const movieSrc = require('../services/movie.service');

const movieCtrl = {

    get: async (req, res) => {
        try {
            let movies = await movieSrc.getMovies();
            res.status(200).json(movies)
        } catch (err) {
            res.status(500).send(err + "Internal Server Error");
        }
    },

    create: async (req, res) => {
        try {
            let saveMovie = await movieSrc.createMovie(req.body)
            res.status(201).json(saveMovie)
        } catch (err) {
            res.status(500).send(err + "Internal Server Error");
        }
    }

}
module.exports = movieCtrl;