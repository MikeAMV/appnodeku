const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello World from 2`);
});

module.exports = app;
