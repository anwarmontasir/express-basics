const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/', (req, res) => {
    const numberOfQuestions = cards.length;
    const questionNumber = Math.floor(Math.random() * numberOfQuestions);
    res.redirect(`/cards/${questionNumber}?side=question`);
});

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;
    const text = cards[id][side];
    const { hint } = cards[id];
    
    const templateData = { id, text };

    if (side === 'question') {
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
    } else {
        templateData.sideToShow = 'question';
    }
    
    res.render('card', templateData);
});

module.exports = router;