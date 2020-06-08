const mongoose = require('mongoose');

let flowerSchema = new mongoose.Schema(
  { name: String,
    family: String,
    description: String},
);

let FlowerModel = mongoose.model('Flower', flowerSchema);

module.exports = FlowerModel;
