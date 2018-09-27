const express = require('express')
const router = express.Router()
const ControllerPencurhat = require('../controllers/pencurhat')


router.get('/', ControllerPencurhat.login)
router.post('/', ControllerPencurhat.loginPost)

router.get('/register', ControllerPencurhat.register)
router.post('/register', ControllerPencurhat.registerPost)

//=================== CRUD SESICurhat ======================//
router.get('/dashboard', ControllerPencurhat.findAllSesiCurhat)

router.get('/add', ControllerPencurhat.addSesiCurhat)
router.post('/add', ControllerPencurhat.addSesiCurhatPost)

// router.get('/:id/edit', ControllerPencurhat.edit)
// router.post('/:id/edit', ControllerPencurhat.editPost)

// router.delete('/:id/delete', ControllerPencurhat.delete)

module.exports = router