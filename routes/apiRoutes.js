const note = require('../data/note')
const router = require('express').Router()

router.get("../public/notes.html", (req, res) => {
 note.getNotes().then(notes => {
  return res.json(notes)
 })
 .catch(err => {res.status(400).json(err)})
})

router.post("../public/notes.html", (req, res) => {
 note.addNotes(req.body)
  .then((note) => res.json(note))
 .catch((err)=>res.status(400).json(err))
})

module.exports = router