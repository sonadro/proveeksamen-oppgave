// mongoose
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    poster: {
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

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;