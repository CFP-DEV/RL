const express = require('express');
const router = express.Router();
const edge = require('edge.js')

// Home
router.get('/', (req, res) => {
    res.send(edge.render('pages.auth.sign-in'));
});

// Auth
router.get('/auth', (req, res) => {
    res.send('Auth');
});

module.exports = router;