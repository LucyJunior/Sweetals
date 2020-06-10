const express = require('express');
const router = express.Router();

let RecipeModel = require ('../models/Recipe.model')


router.get('/:id', (req, res) => {
RecipeModel.findById(req.params.id)
.then((recipe) => {
  // let recipe = "whatever you got from the promise"
  res.render('users/finalRecipe',{recipe})
  //render = you point to an hbs files you want to show in the browser. "redirect", I manualy change the URL where the user will be send
})
.catch((error)=>{
  console.log("not working recipe routes", error)
     })
 });



// res.render('users/finalRecipe'));

module.exports = router;