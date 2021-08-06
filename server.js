const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')
const app = express();

app.get('./public/assets/js/index.js', (req, res) => {
    res.json(db.json);
});
app.use(express.json());

app.use(express.static('public'));

app.use('/routes/apiRoutes.js')
app.use('/routes/htmlRoutes.js')
app.listen(3002, () => {
    console.log('lets see what happens?')
    return;
}) 