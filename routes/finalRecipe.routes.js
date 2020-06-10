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

module.exports = router;


// res.render('users/finalRecipe'));

//     .then((onerecipe) => {
//       //behind the scene Javascript is creating the variable with the name you select
//       let recipe = "whatever you got form the promise"
//       //if the connection with the server is ok, then you run a then
//       res.render('users/finalRecipe', {onerecipe})
//       console.log("the recipe", onerecipe)      
//         })
//         .catch((error) => {
//         console.log('doesnt work', error)
//         })
// });
// //whenever you put something in then and catch could be whatever you want and would be whatever you get in the promise

// module.exports = router;

//render, you point to the hbs you want to show. I something common in hbs (html), that you want to render in the brownser
//redirect, you manually change the url that the user will be sent. A botton that will automatically sent somewhere else when clicked.