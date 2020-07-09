const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
    name: String,
    items: [{
        pic: String,
        url: String
    }]
})


module.exports = mongoose.model('Ad', AdSchema, 'ads');