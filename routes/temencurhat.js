const express = require('express')
const router = express.Router()
const TemenCurhatController = require('../controllers/temencurhat')

router.get('/login', TemenCurhatController.show)
router.get('/:id/delete', TemenCurhatController.delete)
router.get('/:id/edit', TemenCurhatController.edit)
router.get('/register', TemenCurhatController.regisForm)

router.post('/register', TemenCurhatController.add)

module.exports = router