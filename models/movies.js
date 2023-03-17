const mongoose = require('mongoose');

const links = mongoose.Schema({
    vf: [String],
    vostfr: [String],
    vo: [String]
});

const movieSchema = mongoose.Schema({
    id: String,
    originalTitle: String,
    frenchTitle: String,
    token: String,
    overview: String,
    poster: String,
    releaseDate: String,
    mediaType: String,
    note: Number,
    nbVoters: Number, 
    link: links,
    date: String,
    category: String,
});

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;