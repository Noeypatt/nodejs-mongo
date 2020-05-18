const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CatSchema = new Schema({
    name: String,
    age: Number,
    owner: String
})

module.exports = mongoose.model('Cats', CatSchema)