const mongoose = require('mongoose')

let todogroupSchema = new mongoose.Schema({
  name: String,
  color: String,
  //referencing from todo.js
  todos: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Todo'

  }]
})

let Todogroup = mongoose.model('Todogroup', todogroupSchema)

module.exports = Todogroup
