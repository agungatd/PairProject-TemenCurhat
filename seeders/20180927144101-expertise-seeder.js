'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Expertises', [
        {
          name: 'Keuangan dan Finansial',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          name: 'Cinta dan Rumah Tangga',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          name: 'Agama dan Keyakinan',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          name: 'Psikologi dan Kejiwaan',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          name: 'Gaya Hidup',
          createdAt: new Date,
          updatedAt: new Date
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Expertises', null, {});
    
  }
};
