'use strict';
module.exports = (sequelize, DataTypes) => {
  const SesiCurhat = sequelize.define('SesiCurhat', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    description: DataTypes.TEXT,
    place: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    expertise: DataTypes.STRING,
    time: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    rating: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    reward: DataTypes.STRING,
    testimony: DataTypes.TEXT,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    PencurhatId: DataTypes.INTEGER,
    TemenCurhatId: DataTypes.INTEGER
  }, {});
  SesiCurhat.associate = function(models) {
    // associations can be defined here
    // SesiCurhat.belongsToMany(models.)
  };
  return SesiCurhat;
};