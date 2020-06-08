const express = require('express');
const router = express.Router();

let RecipeModel = require ('../models/Recipe.model')
let FlowerModel = require ('../models/Flower.model')

router.get('/', (req, res, next) => {
  res.render('users/newRecipe')
  // i will pass all the info from flower list here, with .find() flowers
  FlowerModel.find()
  .then((flowers) => {
    console.log(flowers)
    res.render('users/newRecipe', {flowers})
  })
});
//passing the info of hbs
router.get('/newRecipe/create', (req, res, next) => {
    res.render('users/newRecipe.hbs') 
});

router.post('/users/create', (req, res, next) => {
  const {name, family, description} = req.body;

  FlowerModel.create({name, family, description})
  .then((response) => {
      res.redirect('/user/newRecipe')
  })
  .catch (() => {
      res.send('something went wrong')
  })
});

router.post('/', (req, res, next) => {
  const {
    title,
    cookingTime,
    numberOfPeople,
    description,
  } = req.body;
  RecipeModel.create({
    title : title,
    cookingTime: cookingTime,
    numberOfPeople :numberOfPeople,
    description : description,
    })
    .then(() => {
      res.redirect('/userRecipe')
      //because it's redirect I need the slash before

    })
    .catch((error) => {
      console.log("error", error)
      res.render('users/newRecipe')
    })

});

module.exports = router;