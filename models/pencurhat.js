'use strict';
module.exports = (sequelize, DataTypes) => {
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
    
});
  Pencurhat.associate = function(models) {
    // associations can be defined here
    Pencurhat.belongsToMany(models.TemenCurhat, {through: models.SesiCurhat})
  };
  return Pencurhat;
};