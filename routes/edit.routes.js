const express = require('express');
const router = express.Router();

let RecipeModel = require('../models/Recipe.model')


router.get('/:id/edit', (req, res, next) => {
  DronesModel.findById(req.params.id)
    .then((response) => {
      console.log("response", response)
      res.render('../edit', {
        response
      })

    })
    .catch(() => {
      res.status(400)
      res.send('Oups!Not working!')

    })
});

router.post('/:id/edit', (req, res, next) => {
  // Update here

  let id = req.params.id
  DronesModel.findByIdAndUpdate(id, {
      $set: {
        title: req.body.title,
        numberOfPeople: req.body.numberOfPeople,
        ingredients: req.body.ingredients,
        preparation: req.body.preparation,
      }
    })
    .then(() => {
      res.redirect('/')
    })
    .catch((response) => {
      res.render('Oops something went wrong', {
        response
      })
    })

});

// router.post('/drones/:id/delete', (req, res, next) => {
//   let id = req.params.id
//   DronesModel.findByIdAndDelete()(id, {
//       $set: {
//         title: req.body.title,
//         numberOfPeople: req.body.numberOfPeople,
//         ingredients: req.body.ingredients,
//         preparation: req.body.preparation,
//       }
//     })
//     .then(() => {
//       res.redirect('/')
//     })
//     .catch((response) => {
//       res.render('../users/userRecipe.hbs', {
//         response
//       })
//     })
// });



module.exports = router;