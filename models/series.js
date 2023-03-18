const mongoose = require('mongoose');

const links = mongoose.Schema({
    vf: [String],
    vostfr: [String],
    vo: [String]
});

const serieSchema = mongoose.Schema({
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
    linksS1: [links],
    linksS2: [links],
    date: String,
    category: String,
});

const Movie = mongoose.model('series', serieSchema);

module.exports = Movie;