const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/', (req, res) => {
    const numberOfQuestions = cards.length;
    const questionNumber = Math.floor(Math.random() * numberOfQuestions);
    res.redirect(`/cards/${questionNumber}`);
});

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;

    if (side !== 'question' && side !== 'answer') {
        res.redirect(`/cards/${id}?side=question`)
    }

    const name = req.cookies.username;
    const text = cards[id][side];
    const { hint } = cards[id];
    
    const templateData = { id, text, name };

    if (side === 'question') {
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
    } else {
        templateData.sideToShow = 'question';
    }
    
    res.render('card', templateData);
});

module.exports = router;