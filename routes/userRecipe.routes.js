const express = require ('express');
const router = express.Router();
const session = require ('express-session')

let FlowerModel = require ('../models/Flower.model')

// .populate all the recipe in this page

router.get('/',(req,res) => res.render('users/userRecipe', {title:'boum'}) )

module.exports = router; 