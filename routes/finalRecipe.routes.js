const express = require('express');
const router = express.Router();

let RecipeModel = require ('../models/Recipe.model')


router.get('/', (req, res) => {
  console.log('userRecipe route is working')
  RecipeModel.findById(req.params.id)

    .then((onerecipe) => {
      //behind the scene Javascript is creating the variable with the name you select
      let recipe = "whatever you got form the promise"
      //if the connection with the server is ok, then you run a then
      res.render('users/finalRecipe', {onerecipe})
      console.log("the recipe", onerecipe)      
        })
        .catch((error) => {
        console.log('doesnt work', error)
        })
});
//whenever you put something in then and catch could be whatever you want and would be whatever you get in the promise

module.exports = router;

//render, you point to the hbs you want to show. I something common in hbs (html), that you want to render in the brownser
//redirect, you manually change the url that the user will be sent. A botton that will automatically sent somewhere else when clicked.