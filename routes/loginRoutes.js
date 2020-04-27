// Require express dependency to include express functionality
const express = require('express');
const passport = require('passport')
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'login.html'))
})

router.get('/form2', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'login2.html'))
})

router.post('/',
    passport.authenticate('local', {
        successRedirect: '/addsales',
        failureRedirect: '/register'
    })
);

router.post('/addcustoma',
    passport.authenticate('local', {
        successRedirect: '/customer',
        failureRedirect: '/customer'
    })
);

module.exports = router;