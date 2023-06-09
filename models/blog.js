// packages
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    poster: {
        type: String,
        required: true
    },
    tittel: {
        type: String,
        required: true
    },
    tekst: {
        type: String,
        required: true
    },
    stjerner: {
        type: Number,
        required: true
    }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;