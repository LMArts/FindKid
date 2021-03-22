'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Dica.init({
    tituloDica: DataTypes.STRING,
    resumoDica: DataTypes.STRING,
    descricaoDica: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dica',
  });
  return Dica;
};