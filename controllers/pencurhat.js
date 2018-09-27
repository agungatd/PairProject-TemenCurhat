
const modelsPencurhat = require('../models').Pencurhat
const modelsTemenCurhat = require('../models').TemenCurhat
const modelsSesiCurhat = require('../models').SesiCurhat
const modelExpertise  = require('../models').Expertise
const crypto = require('crypto')

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
          res.render('pencurhatDashboard', {pencurhat:data[i], errMsg:null, sessions:[]})
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
    res.render(' ', {errMsg:null})
  }

  static registerPost(req, res) {
    res.send(req.body)

        let password = req.body.password;
        const secret = 'qerjalemburbagaiquda';
        const hash = crypto.createHmac('sha256', secret)
                    .update(password)
                    .digest('hex');
    console.log(req.body.password, 'dan', hash)
    //   modelsPencurhat.create({
    //     name: req.body.name,
    //     gender: req.body.gender,
    //     email: req.body.email,
    //     phone: req.body.phone,
    //     birthDate: req.body.birthDate,
    //     city: req.body.city,
    //     password: hash
    // })
    // .then((result) => {
    //     res.redirect('/pencurhat')
    // })
    // .catch((err) => {
    //     res.send(err)
    // });
  }

  static findAllSesiCurhat(req, res) {
    // res.send('dashboard')
    modelsSesiCurhat.findAll()
    .then(sessions=>{
      modelExpertise.findAll()
      .then(expertises=>{
        res.render('pencurhatDashboard', {sessions:sessions, expertises:expertises})
      })
    })
    .catch((err) => {
      res.send(err)
    });
  }

  static addSesiCurhat(req, res) {
    modelExpertise.findAll()
      .then(expertises=>{
        res.render('sesiCurhatAdd', {expertises:expertises})
      })
      .catch((err) => {
        res.send(err)
      });
  }
  static addSesiCurhatPost(req,res) {
    res.send(req.body)
    modelsSesiCurhat.create({
      title: req.body.title,
      description: req.body.description,
      place: req.body.place,
      expertise: req.body.expertise,
      time: req.body.time,
      age: req.body.age,
      gender: req.body.gender,
      rating: null,
      reward: req.body.reward,
      // PencurhatId: req.session.user
    })
    
  }
}

module.exports = Controller
