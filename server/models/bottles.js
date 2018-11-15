const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bottleSchema = new Schema({
    title: { type: String },
    price:{type: Number},
    quantity:{type: Number},
  });
  module.exports = mongoose.model('Bottle', bottleSchema);