const express = require('express');
const router = express.Router();



router.get('/', (req, res) => res.render('users/flowerlist', {title: 'haaaia Lucy'}))



module.exports = router;