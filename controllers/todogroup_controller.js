var Todogroup = require('../models/todogroup')
var Todo = require('../models/todo')

function newTodogroup (req, res) {

  Todo.find({}, function (err, output) {
    // console.log(output);
    res.render('todogroups/create', {
      allTodos: output
    })
  })
}

function create(req,res) {
  Todogroup.create(req.body, (err, output) => {
    if(err)return res.send(err)
  })
  console.log(req.body)
  res.redirect('/todogroups')
}

function show(req,res) {

  Todogroup.findById(req.params.id).populate('todos').exec( (err, output) => {
    if (err) return res.send(err)
    res.render('todogroups/show', {
      todogroup: output 
    })
  })
}

module.exports = {
  new: newTodogroup,
  create: create,
  show: show
}
