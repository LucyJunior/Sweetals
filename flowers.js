// const express = require('express');
// // require the Flower model here
// let FlowerModel = require('../models/Flower.model');

// const router = express.Router();
// router.get('/flowers', (req, res, next) => {
//   // Iteration #2: List the drones
//   flowerlist.find()
//     .then((result)=>{res.render('../views/users/flowerlist.hbs', {result})})
// });
// router.get('/users/edit', (req, res, next) => {
//   // Iteration #3: Add a new drone
//   res.render('../views/users/edit.hbs')
// });
// router.post('/users/edit', (req, res, next) => {
//   // Iteration #3: Add a new drone
//   // ... your code here
//   const {name, ingredients,time} = req.body;
//   FlowerModel.create({tittle:name,ingredients:ingredients, time:time})
//     .then(()=> {
//     res.redirect('/users')
//     })
//     .catch(()=> {
//     res.render('../views/users/edit.hbs')
//     })
// });
// router.get(‘/uders/:id/edit’, (req, res, next) => {
//   // Iteration #4: Update the drone
//   // ... your code here
//   DronesModel.findById(req.params.id)
//   .then((response)=> {
//     res.render(‘../views/drones/update-form.hbs’,{response})
//     })
//     .catch(()=> {
//     res.send(‘Oups!Not working!‘)
//     })
// });
// router.post(‘/drones/:id/edit’, (req, res, next) => {
//   // Iteration #4: Update the drone
//   // ... your code here
//   let id = req.params.id
//   const {name, propellers, maxSpeed} = req.body;
//   DronesModel.findByIdAndUpdate(id, {$set: {name: name, propellers: propellers,maxSpeed:maxSpeed }})
//   .then((todo) => {
//        res.redirect(‘/drones’)
//   })
//   .catch((response) => {
//        res.render(‘../views/drones/update-form.hbs’,{response})
//   })
// });
// router.post(‘/drones/:id/delete’, (req, res, next) => {
//   // Iteration #5: Delete the drone
//   // ... your code here
//   let id = req.params.id
//   const {name, propellers, maxSpeed} = req.body;
//   DronesModel.findByIdAndDelete()(id, {$set: {name: name, propellers: propellers,maxSpeed:maxSpeed }})
//   .then((todo) => {
//        res.redirect(‘/drones’)
//   })
//   .catch((response) => {
//        res.render(‘../views/drones/update-form.hbs’,{response})
//   })
// });
// module.exports = router;