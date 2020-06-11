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
      res.render('users/edit', {
        recipe,
        ownerBoolean,
      })
      //render = you point to an hbs files you want to show in the browser. "redirect", I manualy change the URL where the user will be send
    })
    .catch((error) => {
      console.log("not working recipe routes", error)
    })
});

router.get('/:id/edit', (req, res) => {

  RecipeModel.findById(req.params.id)
    .then((recipe) => {
      console.log("recipe to edit", recipe)
      if (req.session.loggedInUser._id == recipe.userId) {
        console.log('yaaaay')
        RecipeModel.findByIdAndUpdate(req.params.id)
          .then((recipe) => {
            console.log(`recipe ${recipe.title} updated`)
            res.redirect('/finalRecipe', )
          })
          .catch((error) => {
            console.log('update not working', error)
            res.redirect('/userRecipe')
          })
      } else { 
        console.log("users don't match, can't update") 
        res.redirect('/userRecipe')
      }
    })
    
    .catch((error) => {
      console.log('delete not working', error)
      res.redirect('/userRecipe')
    })
});

router.post('/:id', (req, res) => {
  // Update here
  let id = req.params.id
  RecipeModel.findByIdAndUpdate(id, {
      $set: {
        title: req.body.title,
        numberOfPeople: req.body.numberOfPeople,
        ingredients: req.body.ingredients,
        preparation: req.body.preparation,
      }
    })
    .then(() => {
      res.redirect('/userRecipe')
    })
    .catch((response) => {
      res.render('Oops something went wrong', {
        response
      })
    })

});


// get all info from  the recipe , then render new page with info
  
// .then((recipe) => {
//   res.render('users/edit',{recipe})
//    })
//    .catch((error) => {
//      res.send('Oups!Not working!', error)
//    })
// });




module.exports = router;

