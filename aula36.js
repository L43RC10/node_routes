const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('App runing...')
});

// routes
app.all('/teste', (req, res, next) => {
    console.log('teste');
    next();
});

app.get('/', (req, res) => {
    res.send('home');
});

app.get('/ab?cd', (req, res) => {
    res.send('lol');
});