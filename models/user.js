// packages
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posted_blogs: {
        type: Array,
        required: false
    },
    posted_comments: {
        type: Array,
        required: false
    },
    liked_blogs: {
        type: Array,
        required: false
    },
    liked_comments: {
        type: Array,
        required: false
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;