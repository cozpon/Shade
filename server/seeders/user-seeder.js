'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('users', [
      {
        name: 'daddio',
        createdAt: new Date(),
        updatedAt: new Date(),
        points: 0,
        status_id: 1,
        role_id: 1,
        deletedAt: null,
        emoji_id: 1
      },
      {
        name: 'shmoo',
        createdAt: new Date(),
        updatedAt: new Date(),
        points: 0,
        status_id: 1,
        role_id: 1,
        deletedAt: null,
        emoji_id: 2
      },
      {
        name: 'slick_daddy'
        createdAt: new Date(),
        updatedAt: new Date(),
        points: 0,
        status_id: 1,
        role_id: 1,
        deletedAt: null,
        emoji_id: 3
      },
      {
        name: 'slick_mama'
        createdAt: new Date(),
        updatedAt: new Date(),
        points: 0,
        status_id: 1,
        role_id: 1,
        deletedAt: null,
        emoji_id: 4
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('users', null, {});

  }
};