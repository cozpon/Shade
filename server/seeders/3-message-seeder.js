'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('messages', [
      {
        body:,
        points:,
        media:,
        shader_id:,
        victim_id:,
        status_id:,
        parent_id:,
        deletedAt:
      },
      {
        body:,
        points:,
        media:,
        shader_id:,
        victim_id:,
        status_id:,
        parent_id:,
        deletedAt:
      },
      {
        body:,
        points:,
        media:,
        shader_id:,
        victim_id:,
        status_id:,
        parent_id:,
        deletedAt:
      },
      {
        body:,
        points:,
        media:,
        shader_id:,
        victim_id:,
        status_id:,
        parent_id:,
        deletedAt:
      },
      {
        body:,
        points:,
        media:,
        shader_id:,
        victim_id:,
        status_id:,
        parent_id:,
        deletedAt:
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('messages', null, {});

  }
};

