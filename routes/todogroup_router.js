const express = require('express')
const router = express.Router()
const todogroupController = require('../controllers/todogroup_controller')

router.route('/')
.get((req,res) => res.send('annoying'))

// router.route('/new')
// .get((req,res) => res.send('newtodogroups'))
router.route('/new')
.get(todogroupController.new)
.post(todogroupController.create)

router.route('/:id')
.get(todogroupController.show)


router.route('/:id/edit')
.get((req,res) => res.send('edit id 1'))




// router.get('/', todoController.list)
// router.get('/new', todoController.new)
// router.post('/', todoController.list)
//
//
// router.get('/:id', todoController.listOne)
// router.get('/:id/edit', todoController.edit)

module.exports = router
