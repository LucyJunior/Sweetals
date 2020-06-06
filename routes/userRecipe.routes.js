const express = require ('express');
const router = express.Router();

router.get('/',(req,res) => res.render('users/userRecipe', {title:'boum'}) )

module.exports = router; 