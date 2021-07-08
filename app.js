const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', {
        prompt: 'Who put the bomp in the bomp bah bomp bah bomp?',
        hint: 'Who put the ram in the ram a lam a ding dong?'
    });
});

app.get('/hello', (req, res) => {
    res.render('hello', {name: req.cookies.username});
})

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.render('hello', {name: req.body.username});
})

app.listen(3000, () => {
    console.log('the application is running on localhost:3000');
});