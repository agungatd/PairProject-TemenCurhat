'use strict';
module.exports = (sequelize, DataTypes) => {
  const crypto = require('crypto');

  const Pencurhat = sequelize.define('Pencurhat', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    gender: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING, 
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      validate: {
        notEmpty: true
      }
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
    hooks:{
      afterValidate(instace,options){
        let password = instace.password;
        const secret = 'qerjalemburbagaiquda';
        const hash = crypto.createHmac('sha256', secret)
                    .update(password)
                    .digest('hex');
                    instace.password = hash;
      }
    }
  });
  Pencurhat.associate = function(models) {
    // associations can be defined here
    Pencurhat.belongsToMany(models.TemenCurhat, {through: models.SesiCurhat})
  };
  return Pencurhat;
};