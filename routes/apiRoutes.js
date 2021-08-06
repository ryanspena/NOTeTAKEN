const note = require('../data/note')
const router = require('express').Route()

router.get("/notes", (req, res) => {
 note.getNotes().then(notes => {
  return res.json(notes)
 })
 .catch(err => {res.status(400).json(err)})
})

