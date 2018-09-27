'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TemenCurhats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      phone: {
        type: Sequelize.INTEGER,
        unique: true
      },
      birthDate: {
        type: Sequelize.DATEONLY
      },
      city: {
        type: Sequelize.STRING
      },
      expertise: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      totalSession: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TemenCurhats');
  }
};