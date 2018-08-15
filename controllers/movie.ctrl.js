class movieCtrl {


    getMovies(req, res) {

        var Movies = [{
                "Title": "Game of Thrones",
                "Year": "2011–",
                "imdbID": "tt0944947",
                "Type": "series",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_SX300.jpg"
            },
            {
                "Title": "The Imitation Game",
                "Year": "2014",
                "imdbID": "tt2084970",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_SX300.jpg"
            }
        ]

        res.json(Movies)
    }

}
module.exports = new movieCtrl();