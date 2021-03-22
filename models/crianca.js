'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Crianca extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Crianca.belongsTo(models.Qrcode);
    }
  };
  Crianca.init({
    nomeCompletoCrianca: DataTypes.STRING,
    dataNascCrianca: DataTypes.STRING,
    sexoCrianca: DataTypes.STRING,
    grauParentescoCrianca: DataTypes.STRING,
    corOlhoCrianca: DataTypes.STRING,
    corCabeloCrianca: DataTypes.STRING,
    tipoCabeloCrianca: DataTypes.STRING,
    tomPeleCrianca: DataTypes.STRING,
    observacaoCrianca: DataTypes.STRING,
    qrcodeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Crianca',
  });
  return Crianca;
};