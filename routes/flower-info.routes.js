const express = require('express');
const router = express.Router();


router.get('/', (req, res) => res.render('users/flower-info', {title: 'Sweetals'}))




module.exports = router;