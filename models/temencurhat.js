'use strict';
module.exports = (sequelize, DataTypes) => {
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
      type: DataTypes.INTEGER,
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
    rating: {
      type: DataTypes.INTEGER
    },
    password: DataTypes.STRING

  }, {});
  TemenCurhat.associate = function(models) {
    // associations can be defined here
    TemenCurhat.belongsToMany(models.Pencurhat, {through: models.SesiCurhat})
  };
  return TemenCurhat;
};