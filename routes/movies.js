var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const { Headers } = fetch;
const uid2 = require('uid2');
const Movie = require('../models/movies');

/* GET movies listing. */
router.get('/all', (req, res) => {
    Movie.find().then(data => {
        res.json({result: true, list: data});
    })
})

router.post('/addMovie', (req, res) => {
    const today = new Date();
        Movie.find().then(movies => {
            if(!movies.includes(e => e.id === req.body.id)){
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
                    category: req.body.category,
                    link: {vf:[], vost:[], vo:[]},
                    date: today,
                });

                newMovie.save().then(movie => {
                    res.json({added: true, data: movie});
                })
            }
        })
});



let base64 = require('base-64');
let headers = new fetch.Headers();
let token = process.env.PCLOUD_TOKEN;

headers.set('Authorization', 'Bearer ' + token);


router.get('/movieUrl/:id', (req, res) => {
    fetch(`https://eapi.pcloud.com/getvideolinks?fileid=${req.params.id}`, {
        method: 'GET',
        headers: headers,
    }).then(response => response.json())
    .then(movie => {
        //console.log(headers);
        let url = 'https://' + movie.variants[1].hosts[0] + movie.variants[1].path;
        res.json({result: true, url});
    })
})

module.exports = router;
