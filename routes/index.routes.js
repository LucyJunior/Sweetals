const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res) => res.render('index', { title: 'Welcome Ironhacker 🚀' }));
router.get('/flowerlist', (req, res) => res.render('index', {title: 'haaaia Lucy'}))


module.exports = router;
