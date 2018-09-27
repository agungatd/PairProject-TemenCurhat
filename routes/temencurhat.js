const express = require('express')
const router = express.Router()
const TemenCurhatController = require('../controllers/temencurhat')

router.get('/', (req, res) => {
    res.render('temencurhatlogin')
})
router.post('/login', TemenCurhatController.login)

router.get('/register', TemenCurhatController.regisForm)
router.post('/register', TemenCurhatController.add)

router.get('/dashboard', TemenCurhatController.dashboard)

router.get('/:id/detailsesi', TemenCurhatController.detailsesi)
router.get('/:idSesi/getsesi/:idTemen', TemenCurhatController.getsesi) 

router.get('/:id/delete', TemenCurhatController.delete)
router.get('/:id/edit', TemenCurhatController.edit)
 
module.exports = router