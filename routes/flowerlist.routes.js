const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  flowerModel.find()
  .then((result) => {
    // console.log("this is the resultat", resultat)
    res.render('../views/users/flowerList', {
      result
    })
  })
});



module.exports = router;