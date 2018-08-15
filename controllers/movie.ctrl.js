const movieSrc = require('../services/movie.service');

const movieCtrl = {

    get: async (req, res) => {
        try {
            let movies = await movieSrc.getMovies();
            res.status(200).json(movies);
        } catch (err) {
            res.status(500).send(err + "Internal Server Error");
        }
    },

    getId: async (req, res) => {
        try {
            let id = await movieSrc.getMovieId(req.params.id);
            res.status(200).json(id);
        } catch (err) {

        }
    },

    create: async (req, res) => {
        try {
            let saveMovie = await movieSrc.createMovie(req.body)
            res.status(201).json(saveMovie);
        } catch (err) {
            res.status(500).send(err + "Internal Server Error");
        }
    },

    delete: async (req, res) => {
        try {
            let removeMovie = movieSrc.deleteMovie(req.params.id);
            res.status(204).send(removeMovie);
        } catch (err) {
            res.status(500).send(err + "Internal Server Error");
        }
    },

    update: async (req, res) => {

        let id = req.params.id;
        delete req.body._id;

        await movieSrc.updateMovie(id, req.body);
        res.status(204).send();
    }

}
module.exports = movieCtrl;