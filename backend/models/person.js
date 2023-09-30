const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('Person', personSchema);