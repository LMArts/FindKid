'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Criancas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeCompletoCrianca: {
        type: Sequelize.STRING
      },
      dataNascCrianca: {
        type: Sequelize.STRING
      },
      sexoCrianca: {
        type: Sequelize.STRING
      },
      grauParentescoCrianca: {
        type: Sequelize.STRING
      },
      corOlhoCrianca: {
        type: Sequelize.STRING
      },
      corCabeloCrianca: {
        type: Sequelize.STRING
      },
      tipoCabeloCrianca: {
        type: Sequelize.STRING
      },
      tomPeleCrianca: {
        type: Sequelize.STRING
      },
      observacaoCrianca: {
        type: Sequelize.STRING
      },
      qrcodeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'qrcodes',
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
    await queryInterface.dropTable('Criancas');
  }
};