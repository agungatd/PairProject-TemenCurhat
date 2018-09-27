
const modelsPencurhat = require('../models').Pencurhat
const modelsTemenCurhat = require('../models').TemenCurhat
const modelsSesiCurhat = require('../models').SesiCurhat

class Controller {
  static login(req, res) {
    res.render('pencurhatLogin', {errMsg:null})
  }
  static loginPost(req, res) {
    modelsPencurhat.findAll({
    })
    .then(data=>{
      let emailExist = false
      for (let i =0; i < data.length; i++) {
        if (req.body.email === data[i].email && req.body.password === data[i].password) {
          res.render('pencurhatDasboard', {pencurhat:data[i], errMsg:null})
          emailExist = true
          break;
        } else if (req.body.email === data[i].email && req.body.password !== data[i].password) {
          res.render('pencurhatLogin', {errMsg: 'Password Yang dimasukan salah'})
          emailExist = true
          break;
        } 
      }
      if(emailExist===false) {
        res.render('pencurhatLogin', {errMsg: 'email belum terdaftar, silahkan register dulu'})
      }
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static register(req, res) {
    res.render('percurhatRegister', {errMsg:null})
  }

  static registerPost(req, res) {
    // res.send(req.body)
    modelsPencurhat.create({
      name: req.body.name,
      gender: req.body.gender,
      email: req.body.email,
      phone: req.body.phone,
      birthDate: req.body.birthDate,
      city: req.body.city
  })
  .then((result) => {
      res.redirect
  }).catch((err) => {
      res.send(err)
  });
  }
}

module.exports = Controller
// .get('/', ControllerPencurhat.findAll)
// .get('/add', ControllerPencurhat.add)
// .post('/add', ControllerPencurhat.addPost)
// .get('/:id/edit', ControllerPencurhat.edit)
// .post('/:id/edit', ControllerPencurhat.editPost)
// .delete('/:id/delete', ControllerPencurhat.delete)