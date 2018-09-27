'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('SesiCurhats', [
        {
          title: 'Galau Cinta',
          description: 'Depresi karena diputusin pacar orang',
          place: 'Kuburan Tanah Kusir',
          expertise: 'Cinta dan Rumah Tangga',
          time: 'Kamis 13-3-2019 jam 23.59 WIB',
          age: 25,
          gender: 'male',
          rating: null,
          reward: 'makan sate 100 tusuk',
          testimony: null,
          status: false,
          PencurhatId: 1,
          TemenCurhatId: null,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          title: 'Kantong Kering Kerontang',
          description: 'Depresi karena ditipu pacar orang',
          place: 'Pasar Tanah Kusir',
          expertise: 'Keuangan dan Finansial',
          time: 'Minggu 13-10-2018 jam 19.59 WIB',
          age: 25,
          gender: 'male',
          rating: null,
          reward: 'mobil Buggati Ciron',
          testimony: null,
          status: false,
          PencurhatId: 1,
          TemenCurhatId: null,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          title: 'Keserakahan akan kehidupan duniawi',
          description: '',
          place: 'Hotel Indonesia room no.123',
          expertise: 'Gaya Hidup',
          time: 'Jum\'at 01-12-2018 jam 13.59 WIB',
          age: 25,
          gender: 'male',
          rating: null,
          reward: 'Uang 1 Milyar 100 rupiah',
          testimony: null,
          status: false,
          PencurhatId: 3,
          TemenCurhatId: null,
          createdAt: new Date,
          updatedAt: new Date
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('SesiCurhats', null, {});
    
  }
};
