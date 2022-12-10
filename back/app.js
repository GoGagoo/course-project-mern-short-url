'use strict';
const express = require('express');
const mongoose = require('mongoose');
const s = require('./src/const');

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json({
    type: ['application/json', 'text/plain']
}));

// global.db = mongoose.createConnection(s.mongodbUri);
global.db = mongoose.createConnection(s.mongodbUri);

const routes = require('./src/routes');

app.get('/all', routes.all);
app.get('/:url', routes.open);
app.post('/short', routes.make);

app.listen(s.port, () => console.log(`${s.listening}${s.port}`));
