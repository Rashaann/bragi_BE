var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const uid2 = require('uid2');
const Movie = require('../models/movies');

/* GET movies listing. */
router.get('/all', (req, res) => {
    Movie.find().then(data => {
        res.json({result: true, list: data});
    })
})

router.post('/addMovie', (req, res) => {
        Movie.find().then(movies => {
            if(!movies.includes(e => e.id === req.body.id)){
                console.log(movies);
                const newMovie = new Movie({
                    id: req.body.id,
                    originalTitle: req.body.original_title,
                    frenchTitle: req.body.french_title,
                    token: uid2(32),
                    overview: req.body.overview,
                    poster: 'https://www.themoviedb.org/t/p/w1280'+req.body.poster_path,
                    releaseDate: req.body.release_date,
                    mediaType: req.body.media_type,
                    note: req.body.vote_average,
                    nbVoters: req.body.vote_count,
                    link: {vf:[], vost:[], vo:[]},
                });

                newMovie.save().then(movie => {
                    res.json({added: true, data: movie});
                })
            }
        })
    });


module.exports = router;
