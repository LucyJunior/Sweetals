 const mongoose = require('mongoose');

const FlowerSchema = new mongoose.Schema(
     { name: String,
      family: String,
      description: String},
    // { timestamps: true}
  
)

let FlowerModel = mongoose.model('flower', FlowerSchema);

module.exports = FlowerSchema

