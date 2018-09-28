'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Pencurhats', [
        {
          name: 'Mary Diana',
          gender: 'female',
          email: 'md@mail.com',
          phone: '081317049905',
          birthDate: '1990-07-30',
          city: 'Jakarta',
          password: '2609d371ad8f0ab830d32027b29d48c1ccc379d75c3b1044e75176e8ca42353c',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          name: 'Ari Wibu',
          gender: 'male',
          email: 'aw@mail.com',
          phone: '081317085505',
          birthDate: '1993-03-30',
          city: 'Jakarta',
          password: '2609d371ad8f0ab830d32027b29d48c1ccc379d75c3b1044e75176e8ca42353c',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          name: 'Lucinta lovegood',
          gender: 'female',
          email: 'll@mail.com',
          phone: '081877045505',
          birthDate: '1992-05-31',
          city: 'Jakarta',
          password: '2609d371ad8f0ab830d32027b29d48c1ccc379d75c3b1044e75176e8ca42353c',
          createdAt: new Date,
          updatedAt: new Date
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Pencurhats', null, {});
    
  }
};
