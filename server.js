const express = require('express');
const fs = require('fs');
const { request } = require('http');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;

const noteData = require("./data/db.json");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
 res.sendFiles(path.join(__dirname, "./public/index.html"))
});

app.get('/notes', (req, res) => {
 res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get('/routes/apiRoutes.js', (req, res) => {
 return res.json(noteData);
});

app.post("/public/notes.html", (req, res) => {
 const newNote = req.body;
 const savedNotes = noteData;

 savedNotes.push(newNote);
 fs.writeFileSync("./data/db.json", JSON.stringify(savedNotes));
 return res.json(savedNotes);
});

app.listen(PORT, () => {
 console.log(`is ${PORT} working?!`);
});