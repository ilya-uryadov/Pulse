const mongoose = require('mongoose');
const { Schema } = mongoose;

//init Record
const Record = new Schema({
    date: Date,
    timesOfDay: Number,
    upperPressure: Number,
    lowerPressure: Number,
    pulse: Number,
    health: Number
});

//
module.exports = mongoose.model('Record', Record);