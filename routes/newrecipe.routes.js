const express = require('express');
const router = express.Router();

let RecipeModel = require ('../models/Recipe.model')

router.get('/', (req, res) =>
res.render('users/newRecipe', {title: 'new recipe of the user'}))


module.exports = router;