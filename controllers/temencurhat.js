const TemenCurhat = require('../models').TemenCurhat
const modelsPencurhat = require('../models').Pencurhat
const modelsTemenCurhat = require('../models').TemenCurhat
const modelsSesiCurhat = require('../models').SesiCurhat
const modelsExpertise = require('../models').Expertise

class TemenCurhatController {
    static add(req, res){
        modelsTemenCurhat.create({
            name: req.body.name,
            gender: req.body.gender,
            email: req.body.email,
            phone: req.body.phone,
            birthDate: req.body.birthDate,
            city: req.body.city,
            expertise: req.body.expertise
        })
        .then((result) => {
            res.render()
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
            res.render('temencurhatregis', {datas: result})
        }).catch((err) => {
            res.send(err)
        });
    }


}

module.exports = TemenCurhatController