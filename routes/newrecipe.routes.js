const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res) => res.render('users/newrecipe', {title: 'new recipe of the user'}))


module.exports = router;