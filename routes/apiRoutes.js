const fs = require('fs');
const notesData = require('../data/db.json');
const { response } = require('express');

module.exports = (app) => {
    
 app.get('/api/notes', (req, res) => {
      
  let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  console.log(JSON.stringify(data));
      
  res.json(data)
  
 });

 app.post('/api/notes', (req, res) => {
  const newNote = req.body;

  console.log(JSON.stringify(newNote));

  newNote.id = uuidv4();

  let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  data.push(newNote);

  fs.writeFileSync('./data/db.json', JSON.stringify(data));

  res.json(data);
 });
}