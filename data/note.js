const { errorMonitor } = require("events");
const fs = require("fs");
const { title } = require("process");
const util = require("util");
const { v4: uuidv4 } = require("uuid");

const readFileAsynch = util.promisify(fs.readFile)

const writeFileAsynch =  util.promisify(fs.writeFile)

class Note {
 read() {
  return readFileAsynch("db/db.json", "utf8")
 }
 write(note) {
  return writeFileAsynch("db/db.json", JSON.stringify(note))
 }
 getNotes() {
  return this.read().then((notes) => {
   let parsenotes;
   try {
    parsenotes = [].concat(JSON.parse(notes))
   } catch (error) {
    parsenotes = []
   }
   return parsenotes
  })
 }
 addNotes(note) {

  const { title, text } = note;
  if (!title || !text) {
   throw new Error("Note 'title' and 'text' cannot be blank")
  }
  const newNote = { title, text, id: uuidv4() };
  return this.getNotes()
   .then((notes) => [...notes, newNote])
   .then((updatedNotes) => this.write(updatedNotes))
   .then(() => newNote)
    
 }
}

module.exports = new Note()