const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    duration: String,
    price: Number
});

module.exports = mongoose.model('Course', courseSchema);
