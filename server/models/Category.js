const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String },
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' } //ref表示的是绑定那个表
})

// schema.virtual('children', {
//     localField: '_id',
//     foreignField: 'parent',
//     justOne: false,
//     ref: 'Category'
// })


module.exports = mongoose.model('Category', schema, 'categories')