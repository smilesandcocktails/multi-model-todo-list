const express = require('express')
const app = express()
const path = require('path')
const ejsLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
// const todo = require('./routes/todo_router')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost/myapp')

mongoose.Promise = global.Promise

app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(ejsLayouts)

app.set('view engine', 'ejs')

const todo = require('./routes/todo_router')
app.use('/todo', todo)

const todogroupRouter = require('./routes/todogroup_router')
app.use('/todogroups', todogroupRouter)

const page = require('./routes/page_router')
app.use('/', page)



app.get('/', (req, res) => {
  res.send('Vell, vell, vell. Vellcome to my app.')
})

app.listen(process.env.PORT || 3000, function() {
  console.log('APP IS LIVE!');
})
