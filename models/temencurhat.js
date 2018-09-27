'use strict';
module.exports = (sequelize, DataTypes) => {
  const crypto = require('crypto');
  
  const TemenCurhat = sequelize.define('TemenCurhat', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true
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
    expertise: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    rating: DataTypes.INTEGER,
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }

  }, {
    hooks: {
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
  TemenCurhat.associate = function(models) {
    // associations can be defined here
    TemenCurhat.belongsToMany(models.Pencurhat, {through: models.SesiCurhat})
  };

  TemenCurhat.prototype.getAge = function(){
    return new Date().getFullYear() - new Date(this.birthDate).getFullYear() 
  }



  return TemenCurhat;
};