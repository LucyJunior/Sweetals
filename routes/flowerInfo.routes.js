const express = require('express');
const router = express.Router();

let RecipeModel = require ('../models/Recipe.model')
let FlowerModel = require ('../models/Flower.model')

router.get('/:id', (req, res, next) => {
  console.log('it s working')
  FlowerModel.findById(req.params.id)
  .then((flower) => {
     RecipeModel.find({flowerId: flower._id})
        .then((recipes) => {
          res.render('users/flowerInfo',{flower, recipes})
        })
  })
});

router.post('/:id/newRecipe', (req, res) => {
  const {
    title,
    cookingTime,
    numberOfPeople,
    ingredients,
    preparation,

  } = req.body; 

  FlowerModel.findById(req.params.id)
   .then((flower) => {
    RecipeModel.create({
      flowerId: flower._id,
      title : title,
      cookingTime: cookingTime,
      numberOfPeople :numberOfPeople,
      ingredients : ingredients,
      preparation : preparation,
      })
      .then(() => {
        res.redirect('/userRecipe')
        //because it's redirect I need the slash before
  
      })
      .catch((error) => {
        console.log("error", error)
        res.render('users/newRecipe')
      })
   })


})


module.exports = router