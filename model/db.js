const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CatSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    age: { type: Number, required: true },
    owner: { type: String, required: true, max: 100 }

})

module.exports = mongoose.model('Cats', CatSchema)