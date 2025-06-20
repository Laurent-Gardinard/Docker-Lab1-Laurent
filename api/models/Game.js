const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    title: String,
    platform: String,
    rating: Number,
    price: Number,
    date: Number
});

module.exports = mongoose.model('Game', GameSchema);
