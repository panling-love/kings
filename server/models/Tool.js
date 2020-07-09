const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
    name: String,
    pic: String
})


module.exports = mongoose.model('Tool', toolSchema, 'tools');