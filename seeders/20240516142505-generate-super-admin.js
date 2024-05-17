'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface,bulkinsert("Users", [{
      full_name: "Ahmad Fairuz",
      email: "afizahmadfairuz@gmail.com",
      phone_number: "+6281231719896",
      address: "gresik",
      gender: "male",
      password: "afizfairuz87",
      is_active: true,
      createdAt: new Date ()
    }]);
  },

  async down(queryInterface, sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
