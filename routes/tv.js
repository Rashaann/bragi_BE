var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const { Headers } = fetch;
const uid2 = require('uid2');
const Tv = require('../models/tv');

/* GET TV channels listing. */
router.get('/all', (req, res) => {
    Tv.find().then(data => {
        res.json({result: true, list: data});
    })
})

router.post('/addChannel', (req, res) => {
    const today = new Date();
        Tv.find().then(channel => {
            if(!channel.includes(e => e.id === req.body.id)){
                const newChannel = new Tv({
                    id: req.body.id,
                    title: req.body.title,
                    token: uid2(32),
                    image: req.body.image,
                    category: req.body.category,
                    link: req.body.link,
                    country: req.body.country,
                    language: req.body.language,
                    date: today,
                });

                newChannel.save().then(channel => {
                    res.json({added: true, data: channel});
                })
            }
        })
});



module.exports = router;
