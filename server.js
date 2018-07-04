const express = require('express');
const app = express();

// Router
app.use('/', require('./routes/routes.js'));

// Listen
app.listen(3000, () => console.log('express server started at port 300'));