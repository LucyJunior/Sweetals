const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
  res.render('auth/signup.hbs');
});

router.post('/signup', (req, res) => {
  
  const {username, email, password } = req.body;
  console.log(username, email, password);
  res.send('Got the data!');

});


module.exports = router;