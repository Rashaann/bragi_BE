const mongoose = require('mongoose');

const tvSchema = mongoose.Schema({
    id: String,
    title: String,
    token: String,
    image: String,
    link: String,
    country: String,
    language: String,
    date: String,
    category: String,
});

const Tv = mongoose.model('tv', tvSchema);

module.exports = Tv;