'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estabelecimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Estabelecimento.belongsTo(models.CategoriaEstabelecimento);
    }
  };
  Estabelecimento.init({
    nomeEstabelecimento: DataTypes.STRING,
    emailEstabelecimento: DataTypes.STRING,
    senhaEstabelecimento: DataTypes.STRING,
    estadoEstabelecimento: DataTypes.STRING,
    cidadeEstabelecimento: DataTypes.STRING,
    enderecoEstabelecimento: DataTypes.STRING,
    telefoneEstabelecimento: DataTypes.STRING,
    cnpjEstabelecimento: DataTypes.STRING,
    descricaoEstabelecimento: DataTypes.STRING,
    categoriaEstabelecimentoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Estabelecimento',
  });
  return Estabelecimento;
};