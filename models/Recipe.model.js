const { Schema, model } = require('mongoose');

const recipeSchema = new Schema(
  {
     title: {
       type: String,
       required: [true, 'Please enter your title here'], 
       unique: true,
       minlength: 6,
       maxlength: 10
     }, 

     cookingTime: {
      type: Number,
      required: true,
    },

     numberOfPeople: {
      type: Number,
      required: true
    },

    Description: {
      type: String,
      required: true, 
      minlength: 50,
      maxlength: 300
    },

    flowerIngredients: {
      /*type: Schema Object ID*/
    }

  }
);

 module.exports = model('Recipe', recipeSchema);
