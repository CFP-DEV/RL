const express = require('express');
const router = express.Router()

// Home
router.get('/', (req, res) => {
    res.send('Hello World!');
});

// Auth
router.get('/auth', (req, res) => {
    res.send('Auth');
});

module.exports = router