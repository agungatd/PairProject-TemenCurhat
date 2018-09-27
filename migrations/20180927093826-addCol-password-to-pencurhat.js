'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.addColumn('Pencurhats','password', { type: Sequelize.STRING });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.removeColumn('Pencurhats', 'password');
    
  }
};
