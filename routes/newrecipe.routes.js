const express = require('express');
const router = express.Router();

let RecipeModel = require ('../models/Recipe.model')
let FlowerModel = require ('../models/Flower.model')
let UserModel = require ('../models/User.model')


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

  } = req.body;
  RecipeModel.create({
    flowerId: flowerId,
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

});
router.get('/:id/newRecipe', (req, res) => {
  console.log('id is', req.params.id)
  res.render('users/newRecipe.hbs', {flowerId: req.params.id});
})



router.get('/:id', (req, res, next) => {
  console.log('it s working')
  UserModel.findById(req.params.id)
  .then((userData) => {
          res.render('users/newRecipe',{userData})
        })
});



module.exports = router;