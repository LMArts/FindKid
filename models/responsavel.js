'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Responsavel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Responsavel.hasMany(models.Qrcode);
    }
  };
  Responsavel.init({
    nomeCompletoResp: DataTypes.STRING,
    sexoResp: DataTypes.STRING,
    celularResp: DataTypes.STRING,
    emailResp: DataTypes.STRING,
    senhaResp: DataTypes.STRING,
    estadoResp: DataTypes.STRING,
    cidadeResp: DataTypes.STRING,
    enderecoResp: DataTypes.STRING,
    numeroResp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Responsavel',
  });
  return Responsavel;
};