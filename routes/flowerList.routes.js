const express = require('express');
const router = express.Router();

let FlowerModel = require ('../models/Flower.model') 

router.get('/', (req, res) => {
  console.log('it s working')
  FlowerModel.find()
  .then((flowers) => {
    res.render('users/flowerlist',{
      flowers
    })
  })
});




module.exports = router;
