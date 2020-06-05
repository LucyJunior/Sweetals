const { Schema, model } = require('mongoose');

const flowerSchema = new Schema(
     { name: String,
      family: String,
      description: String},
    { timestamps: true}
  
);

module.exports = model('Flower', flowerSchema);
