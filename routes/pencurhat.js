const express = require('express')
const router = express.Router()
const ControllerPencurhat = require('../controllers/pencurhat')


router.get('/', ControllerPencurhat.login)
router.post('/', ControllerPencurhat.loginPost)

//=================== CRUD ======================//
// router.get('/', ControllerPencurhat.findAll)

// router.get('/add', ControllerPencurhat.add)
// router.post('/add', ControllerPencurhat.addPost)

// router.get('/:id/edit', ControllerPencurhat.edit)
// router.post('/:id/edit', ControllerPencurhat.editPost)

// router.delete('/:id/delete', ControllerPencurhat.delete)

module.exports = router