const mongoose = require('mongoose');

const imageDetailsSchema = new mongoose.Schema({
    sku: String,
    description: String,
    name: String,
    qty: Number,
    images: [String], 
});

module.exports = mongoose.model('ImageDetails', imageDetailsSchema);
