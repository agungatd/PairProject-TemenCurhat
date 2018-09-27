'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pencurhat = sequelize.define('Pencurhat', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isAlpha: true
      }
    },
    gender: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      unique: true,
      validate: {
        isInt: true
      }
    },
    birthDate: DataTypes.DATEONLY,
    city: DataTypes.STRING
  }, {});
  Pencurhat.associate = function(models) {
    // associations can be defined here
    Pencurhat.belongsToMany(models.TemenCurhat, {through: models.SesiCurhat})
  };
  return Pencurhat;
};