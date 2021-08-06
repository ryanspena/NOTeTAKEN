const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

const PORT = process.env.PORT || 3003;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

app.listen(PORT, () => {
 console.log(`is ${PORT} working?!`);
});