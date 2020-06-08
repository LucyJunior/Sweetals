const mongoose = require('mongoose');

let RecipeSchema = new mongoose.Schema({
title: String, 
Cookingtime: Number, 
Numberpeople: Number, 
Description: String
},
);

let RecipeModel = mongoose.model('Recipe', RecipeSchema);

module.exports = RecipeModel;


