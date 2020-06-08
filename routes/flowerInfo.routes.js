const express = require('express');
const router = express.Router();


router.get('/', (req, res) => res.render('users/flowerInfo', {title: 'Sweetals'}))




module.exports = router;