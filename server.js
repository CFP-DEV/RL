require('dotenv').config();
const express = require('express');
const app = express();

// Router
app.use('/', require('./routes/routes.js'));

// Listen
app.listen(process.env.PORT, () => {
    // Message
    console.log(`Listening on PORT: ${process.env.PORT}`);
});