const express = require('express');
const router = express.Router();

const FlowerModel = require('../models/Flower.model')

router.get('/',  (req, res) => res.render('users/flowerInfo', {title: 'Sweetals'}))


router.get('/:id', (req, res, next) => {
  console.log('it s working')
  FlowerModel.findById(req.params.id)
  .then((flower) => {
    res.render('users/flowerInfo',{flower})
  })
});



module.exports = router;