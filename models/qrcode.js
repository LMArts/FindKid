'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Qrcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Qrcode.belongsTo(models.Responsavel);
      Qrcode.hasOne(models.Crianca);
    }
  };
  Qrcode.init({
    codigoQrcode: DataTypes.STRING,
    localizacaoQrcode: DataTypes.STRING,
    latitudeQrcode: DataTypes.DOUBLE,
    longitudeQrcode: DataTypes.DOUBLE,
    responsavelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Qrcode',
  });
  return Qrcode;
};