const mongoose = require('mongoose');


const RecipeSchema = new mongoose.Schema(
  {
    flowerId: {
      type: mongoose.Schema.Types.ObjectId
   },
     title: {
       type: String,
       required: [true, 'Please enter your title here'], 
       unique: true,
      //  minlength: 6,
      //  maxlength: 10
     }, 

     cookingTime: {
      type: Number,
      required: true,
    },

     numberOfPeople: {
      type: Number,
      required: true
    },

    ingredients: {
      type: String,
      //required: true, 
      // minlength: 50,
      // maxlength: 300
    },

    preparation: {
      type: String,
      //required: true, 
      // minlength: 50,
      // maxlength: 300
    },
  },
    { 
      timestamps: true
    }
);

let RecipeModel = mongoose.model('Recipe', RecipeSchema);

module.exports = RecipeModel;
