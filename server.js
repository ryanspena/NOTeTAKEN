const express = require('express');

const app = express();

app.get('./public/assets/js/index.js', (req, res) => {
    res.json(db.json);
});

app.listen(3002, () => {
    console.log('lets see what happens?')
    return;
}) 