'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('TemenCurhats', [
        {
          name: 'John Doe',
          gender: 'male',
          email: 'a@mail.com',
          phone: '081320045505',
          birthDate: '1980-05-30',
          city: 'Jakarta',
          expertise: 'Keuangan dan Finansial',
          rating: null,
          totalSession: 0,
          password: '2609d371ad8f0ab830d32027b29d48c1ccc379d75c3b1044e75176e8ca42353c',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          name: 'Kang Kosasih',
          gender: 'male',
          email: 'b@mail.com',
          phone: '081320046605',
          birthDate: '1985-05-30',
          city: 'Jakarta',
          expertise: 'Cinta dan Rumah Tangga',
          rating: null,
          totalSession: 0,
          password: '2609d371ad8f0ab830d32027b29d48c1ccc379d75c3b1044e75176e8ca42353c',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          name: 'Mary Jane',
          gender: 'female',
          email: 'c@mail.com',
          phone: '081317045505',
          birthDate: '1980-05-30',
          city: 'Jakarta',
          expertise: 'Agama dan Keyakinan',
          rating: null,
          totalSession: 0,
          password: '2609d371ad8f0ab830d32027b29d48c1ccc379d75c3b1044e75176e8ca42353c',
          createdAt: new Date,
          updatedAt: new Date
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('TemenCurhats', null, {});
    
  }
};
