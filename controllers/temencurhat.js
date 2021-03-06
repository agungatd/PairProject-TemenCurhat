const modelsPencurhat = require('../models').Pencurhat
const modelsTemenCurhat = require('../models').TemenCurhat
const modelsSesiCurhat = require('../models').SesiCurhat
const modelsExpertise = require('../models').Expertise
const Helper = require('../helpers/index')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;


class TemenCurhatController {
    static add(req, res){
        modelsTemenCurhat.create({
            name: req.body.name,
            password: req.body.password,
            gender: req.body.gender,
            email: req.body.email,
            phone: req.body.phone,
            birthDate: req.body.birthDate,
            city: req.body.city,
            expertise: req.body.expertise,
            rating: null
        }) 
        .then((result) => {
            res.redirect('/temen-curhat')
        }).catch((err) => {
            res.send(err)
        });
    }
    static edit(req, res){
        modelsTemenCurhat.update({
            name: req.body.name,
            gender: req.body.gender,
            email: req.body.email,
            phone: req.body.phone,
            birthDate: req.body.birthDate,
            city: req.body.city,
            expertise: req.body.expertise
        }, {where: {
                id: this.params.id
        }})
        .then((result) => {
            res.render(result)
        }).catch((err) => {
            res.send(err)
        });
    }

    static delete(req, res){
        modelsTemenCurhat.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((result) => {
            res.render(result)
        }).catch((err) => {
            res.send(err)
        });
    }
    static show(req, res){
        modelsTemenCurhat.findAll()
        .then((result) => {
            res.render(result)
        }).catch((err) => {
            res.send(err)
        });
    }
    static regisForm(req, res){
        modelsExpertise.findAll()
        .then((result) => {
            res.render('temencurhatRegis', {datas: result})
        }).catch((err) => {
            res.send(err)
        });
    }
    static dashboard(req, res){
        modelsSesiCurhat.findAll({
            where: {
                age: {[Op.between]: [Number(req.session.user.age) -5, Number(req.session.user.age) +5]},
                status: false
            }
        })
        .then((result) => {
            modelsSesiCurhat.findAll({
                where: {
                    TemenCurhatId: req.session.user.id    
                }, order : [['time', 'DESC']]
            })
            .then((sesi) => {
                console.log(sesi);
                
                res.render('temencurhatdashboard', {datas: result, mySesi: sesi})
            })
        }).catch((err) => {
            res.send(err)
        });
    }
    static detailsesi(req, res){
        modelsSesiCurhat.findOne({
            where: {
                id: req.params.id
            }
            // , include: [{model: modelsPencurhat}]    // eiger loading erorr
        })
        .then((result) => {
            // res.send(result)
            modelsPencurhat.findById(result.PencurhatId)
            .then((pencurhat) => {
                let idSesi = req.session.user.id
                res.render('temencurhatdetail', {data: result, idSesi: idSesi, pencurhat: pencurhat})
            })
            
        }).catch((err) => {
            res.send(err)
        });
    }
    static getsesi(req, res){
        modelsSesiCurhat.update({
            TemenCurhatId: req.params.idTemen,
            status: true
        }, { where: {
            id: req.params.idSesi
        }})
        .then((result) => {
            modelsSesiCurhat.findById(req.params.idSesi)
            .then((usersesi) => {
                modelsPencurhat.findById(usersesi.PencurhatId)
                .then((pencurhat) => {

                    let txt = `Jadwal Ketemuan kamu di ${usersesi.place} pada ${usersesi.time} telah dijadwalkan ~ COD yuks ahh :)`
                    let noTmn = req.session.user.phone
                    let noCurhat = pencurhat.getPhone()
                    // res.send(noCurhat)
                    Helper.sendSMS(noTmn, noCurhat, txt )
                    res.redirect('/temen-curhat/dashboard')
                })
            })
            
        }).catch((err) => {
            res.send(err)
        });
    }
    static login(req, res){
        let hash = Helper.getHash(req.body.password)        
        modelsTemenCurhat.findOne({
            where: {
                email: req.body.email,
                password: hash
            }
        })
        .then((user) => {
            if(!user){
                res.send('akun tidak ada')
                // res.redirect('/employees?error=Account or Password is wrong');
            } else{
                req.session.user = {
                    id: user.id,
                    age: user.getAge(),
                    phone: modelsTemenCurhat.getPhone(user.phone)
                }
                console.log(req.session.user);
                
                setTimeout(() => {
                    res.redirect('/temen-curhat/dashboard');
                }, 2000);
        }}).catch((err) => {
            res.send(err)
        });
    }
    
}

module.exports = TemenCurhatController