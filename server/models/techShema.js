const mongoose = require('mongoose');

const techSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('techStacks', techSchema)