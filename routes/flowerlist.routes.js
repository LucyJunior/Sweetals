const express = require('express');
const router = express.Router();

<<<<<<< HEAD
/* GET home page */
router.get('/', (req, res) => res.render('index', { title: 'Welcome Ironhacker 🚀' }));
router.get('/flowerlist', (req, res) => res.render('index', {title: 'haaaia Lucy'}))
=======
router.get('/', (req, res) => res.render('users/flowerlist', {title: 'haaaia Lucy'}))
>>>>>>> f3163143e875c50954d3de951332adb9346c61e4


module.exports = router;