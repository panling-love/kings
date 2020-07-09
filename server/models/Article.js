const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({

    title: String,
    parent: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category',
    }],
    body: String,
    date: String
})


module.exports = mongoose.model('Article', heroSchema, 'articles');