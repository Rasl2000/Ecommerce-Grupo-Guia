"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Converstation extends Model {
    static associate({ Messenger, User }) {
      // Converstation.hasMany(Messenger, { foreignKey: "idConverstation" });
    }
  }
  Converstation.init(
    {
      user1Id: DataTypes.STRING,
      user2Id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Converstation",
    }
  );
  // Converstation.sync({ alter: true });
  return Converstation;
};
