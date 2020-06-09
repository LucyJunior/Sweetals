const express = require('express');
const router = express.Router();
//const multer = require('multer');
//const upload = multer({dest: '/uploads/'});

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