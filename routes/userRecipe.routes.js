const express = require('express');
const router = express.Router();
const session = require('express-session')

let RecipeModel = require('../models/Recipe.model')
// .populate all the recipe in this page

router.get('/', (req, res) => {
  console.log('userRecipe route is working')
  RecipeModel.find ({userId : req.session.loggedInUser})
    .then((recipes) => {
      res.render('users/userRecipe',{recipes})
   console.log("the recipes", recipes)
    })
    .catch((error)=>{
 console.log("not working recipe routes", error)
    })
});

//call the API and ask for all of the recipes of the logged in user

//inside the then you put the line above
//2-object you pass to the render











//new

// router.get('/newRecipe/:id/add', (req, res) => {
//   const { id } = req.params;
//   const user = req.session.loggedInUser;
//     UserModel.findById({ userId: user._id})
//     .then((recipes) => {
//       if (!response.length) {
//         UserModel.create({userId: user.id,  [{ id }] });
//       } else {
//         UserModel.updateOne(
//           {userId : user.id},
//           {$push: {  [{ id }] }},
//     )
//     .then(() => {
//       res.send('not working');
//     })
//     .catch((err) => {
//       res.send('something went wrong');

//     });
//   }
// })
//     .catch(() => {
//       res.send('something went wrong');

//     });
//   })

module.exports = router;