'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('emojis', [
      {
        emoji:
      },
      {
        emoji:
      },
      {
        emoji:
      },
      {
        emoji:
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('emojis', null, {});

  }
};