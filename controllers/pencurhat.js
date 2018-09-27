
const modelsPencurhat = require('../models').Pencurhat
const modelsTemenCurhat = require('../models').TemenCurhat
const modelsSesiCurhat = require('../models').SesiCurhat
const modelExpertise  = require('../models').Expertise
const crypto = require('crypto');
const Helper = require('../helpers/index')


class Controller {
  static login(req, res) {
    res.render('pencurhatLogin', {errMsg:null})
  }

  static loginPost(req, res){
    let hash = Helper.getHash(req.body.password)        
    modelsPencurhat.findOne({
        where: {
            email: req.body.email,
            password: hash
        }
    })
    .then((user) => {
        if(!user){
            res.send('akun tidak ada')
        } else{
          console.log('masuuk');
            req.session.user = {
                id: user.id,
            }
          res.redirect('/pencurhat/dashboard')
    }}).catch((err) => {
        res.send(err)
    });
  }

  static register(req, res) {
    res.render('pencurhatRegister', {errMsg:null})
  }

  static registerPost(req, res) {
      modelsPencurhat.create({
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        phone: req.body.phone,
        birthDate: req.body.birthDate,
        city: req.body.city,
        password: req.body.password
    })
    .then((result) => {      
        res.redirect('/pencurhat')
    })
    .catch((err) => {
        res.send(err)
    });
  }

  static findAllSesiCurhat(req, res) {
    // res.send('dashboard')
    modelsSesiCurhat.findAll({
      where: {
        PencurhatId: req.session.user.id
      }
    })
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
    // res.send(req.session.user)
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
      PencurhatId: req.session.user.id
    })
    .then(expertises=>{
      res.redirect('/pencurhat/dashboard')
    })
    .catch((err) => {
      res.send(err)
    });
    
  }





}

module.exports = Controller
