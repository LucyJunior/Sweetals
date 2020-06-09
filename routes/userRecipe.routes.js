const express = require ('express');
const router = express.Router();

let RecipeModel = require('../models/Recipe.model')

router.get('/',(req,res) => res.render('users/userRecipe', {title:'boum'}) )

// router.get('userRecipe/:id', (req,res) => {

//   RecipeModel.findById(req.params.myId)
//   .then((recipes) => {
//     res.render('', {recipes})
//   })
//   .catch(() => {
//     res.send('Something went wrong')
//   })
// })

// router.post('/drones/:id/delete', (req, res, next) => {
//   RecipeModel.findByIdAndDelete(req.params.id)
//     .then(() => {
//       res.redirect('/userRecipe')
//     })
//     .catch((response) => {
//       res.send('Something went wrong' {
//         response
//       })
//     })
// });

module.exports = router; 