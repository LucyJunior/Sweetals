const express = require('express');
const router = express.Router();

let RecipeModel = require ('../models/Recipe.model')
let FlowerModel = require ('../models/Flower.model')


router.get('/', (req, res, next) => {
  // i will pass all the info from flower list here, with .find() flowers
  FlowerModel.find()
  .then((flowers) => {
    console.log(flowers)
    res.render('users/newRecipe', {flowers})
  })
});

router.post('/', (req, res, next) => {
  const {
    title,
    cookingTime,
    numberOfPeople,
    ingredients,
    preparation,
    imageOfRecipe,
  } = req.body;
  RecipeModel.create({
    flowerId: flowerId,
    title : title,
    cookingTime: cookingTime,
    numberOfPeople :numberOfPeople,
    ingredients : ingredients,
    preparation : preparation,
    img:img,
    })
    .then((response) => {
      res.redirect('/userRecipe', {showSuccessMessage: true})
      //because it's redirect I need the slash before

    })
    .catch((error) => {
      console.log(error)
      res.render('newRecipe.hbs', {showFailureMessage: true})
    })
});

module.exports = router;