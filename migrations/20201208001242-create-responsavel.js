'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Responsavels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeCompletoResp: {
        type: Sequelize.STRING
      },
      sexoResp: {
        type: Sequelize.STRING
      },
      celularResp: {
        type: Sequelize.STRING
      },
      emailResp: {
        type: Sequelize.STRING
      },
      senhaResp: {
        type: Sequelize.STRING
      },
      estadoResp: {
        type: Sequelize.STRING
      },
      cidadeResp: {
        type: Sequelize.STRING
      },
      enderecoResp: {
        type: Sequelize.STRING
      },
      numeroResp: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Responsavels');
  }
};