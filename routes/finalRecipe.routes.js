const express = require('express');
const router = express.Router();

let RecipeModel = require('../models/Recipe.model')


router.get('/:id', (req, res) => {
  RecipeModel.findById(req.params.id)
    .then((recipe) => {
      let ownerBoolean = false

      if(req.session.loggedInUser._id == recipe.userId){
        ownerBoolean = true
      }
      console.log(req.session.loggedInUser._id, recipe.userId, ownerBoolean)

      // let recipe = "whatever you got from the promise"
      res.render('users/finalRecipe', {
        recipe,
        ownerBoolean,
      })
      //render = you point to an hbs files you want to show in the browser. "redirect", I manualy change the URL where the user will be send
    })
    .catch((error) => {
      console.log("not working recipe routes", error)
    })
});

router.get('/:id/delete', (req, res) => {
  RecipeModel.findById(req.params.id)
    .then((recipe) => {
      console.log("recipe to delete", recipe)
      if (req.session.loggedInUser._id == recipe.userId) {
        RecipeModel.findByIdAndDelete(req.params.id)
          .then((recipe) => {
            console.log(`recipe ${recipe.title} deleted`)
            res.redirect('/userRecipe')
          })
          .catch((error) => {
            console.log('delete not working', error)
            res.redirect('/userRecipe')
          })
      } else { 
        console.log("users don't match, can't delete") 
        res.redirect('/userRecipe')
      }
    })
    .catch((error) => {
      console.log('delete not working', error)
      res.redirect('/userRecipe')
    })

});



// res.render('users/finalRecipe'));

module.exports = router;