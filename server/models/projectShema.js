const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    linkToPage: {
        type: String,
        required: false
    },
    linkToGitHub: {
        type: String,
        required: false
    },
    linkToDemo: {
        type: String,
        required: false
    },
    showcase: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Projects', projectSchema)