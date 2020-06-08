const express = require('express');
const router = express.Router();

let RecipeModel = require ('../models/Recipe.model') 



router.get('/', (req, res) => {
  console.log('it s working')
  RecipeModel.find()
  .then((recipe) => {
    res.render('users/newrecipe',{
      recipe
    })
  })
});


module.exports = router;