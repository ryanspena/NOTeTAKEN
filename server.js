const PORT = process.env.PORT || 3002;

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const notes = require("./data/db.json")
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')


app.get('./public/assets/js/index.js', (req, res) => {
    res.json(db.json);
});
app.use(express.static('public'));
app.use('/routes/apiRoutes.js')
app.use('/routes/htmlRoutes.js')
app.listen(3002, () => {
    console.log('lets see what happens?')
    return;
}) 