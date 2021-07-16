const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('card', {
        prompt: 'Who put the bomp in the bomp bah bomp bah bomp?',
        hint: 'Who put the ram in the ram a lam a ding dong?'
    });
});

module.exports = router;