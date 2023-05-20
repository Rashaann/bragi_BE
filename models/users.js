const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,   
    password: String,
    token: String,
    status: String,
    access: [String],
});

const User = mongoose.model('users', usersSchema);

module.exports = User;