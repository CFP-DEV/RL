const express = require('express');
const router = express.Router();
const edge = require('edge.js')

// Auth
router.get('/auth/sign-in', (req, res) => {
    res.send(edge.render('pages.auth.sign-in'));
});

router.get('/auth/sign-up', (req, res) => {
    res.send(edge.render('pages.auth.sign-up'));
});

// Home
router.get('/', (req, res) => {
    res.send('Auth');
});


module.exports = router;