const express = require('express');
const router = express.Router();

let RecipeModel = require('../models/Recipe.model')


router.get('/:id', (req, res) => {
  RecipeModel.findById(req.params.id)
  // get all info from  the recipe , then render new page with info
    .then((recipe) => {
   res.render('users/edit',{recipe})
    })
    .catch((error) => {
      res.send('Oups!Not working!', error)
    })
});

router.post('/:id', (req, res) => {
  // Update here
  

  let id = req.params.id
  RecipModel.findByIdAndUpdate(id, {
      $set: {
        title: req.body.title,
        numberOfPeople: req.body.numberOfPeople,
        ingredients: req.body.ingredients,
        preparation: req.body.preparation,
      }
    })
    .then(() => {
      res.redirect('/')
    })
    .catch((response) => {
      res.render('Oops something went wrong', {
        response
      })
    })

});






module.exports = router;