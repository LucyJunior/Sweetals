const express = require ('express');
const router = express.Router();

router.get('/',(req,res) => res.render('users/recipe.hbs', {title:'recipes'}) )

module.exports = router; 