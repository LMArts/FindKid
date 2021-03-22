'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Qrcodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigoQrcode: {
        type: Sequelize.STRING
      },
      localizacaoQrcode: {
        type: Sequelize.STRING
      },
      latitudeQrcode: {
        type: Sequelize.DOUBLE
      },
      longitudeQrcode: {
        type: Sequelize.DOUBLE
      },
      responsavelId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'responsavels',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    await queryInterface.dropTable('Qrcodes');
  }
};