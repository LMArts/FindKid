'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoriaEstabelecimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CategoriaEstabelecimento.hasMany(models.Estabelecimento);
    }
  };
  CategoriaEstabelecimento.init({
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CategoriaEstabelecimento',
  });
  return CategoriaEstabelecimento;
};