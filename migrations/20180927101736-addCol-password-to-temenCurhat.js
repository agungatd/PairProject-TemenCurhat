'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.addColumn('TemenCurhats','password', { type: Sequelize.STRING });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.removeColumn('TemenCurhats', 'password');
    
  }
};
