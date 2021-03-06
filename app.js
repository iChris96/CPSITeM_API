require('dotenv').config();


const express = require('express');

const bodyParser = require('body-parser');

const router = require('./routes');

const app = express();


// Cargamos los middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load routes into app
app.use(router);

app.listen(5555, () => console.log('Example app listening on port 5555!'))
