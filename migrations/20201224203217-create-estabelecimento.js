'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Estabelecimentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeEstabelecimento: {
        type: Sequelize.STRING
      },
      emailEstabelecimento: {
        type: Sequelize.STRING
      },
      senhaEstabelecimento: {
        type: Sequelize.STRING
      },
      estadoEstabelecimento: {
        type: Sequelize.STRING
      },
      cidadeEstabelecimento: {
        type: Sequelize.STRING
      },
      enderecoEstabelecimento: {
        type: Sequelize.STRING
      },
      telefoneEstabelecimento: {
        type: Sequelize.STRING
      },
      cnpjEstabelecimento: {
        type: Sequelize.STRING
      },
      descricaoEstabelecimento: {
        type: Sequelize.STRING
      },
      categoriaEstabelecimentoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categoriaestabelecimentos',
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
    await queryInterface.dropTable('Estabelecimentos');
  }
};