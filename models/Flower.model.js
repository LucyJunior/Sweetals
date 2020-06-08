const mongoose = require('mongoose');

let flowerSchema = new mongoose.Schema(
  { name: String,
    family: String,
    description: String},
);

flowerModel = mongoose.model('Flower', flowerSchema);

module.exports = flowerModel;
