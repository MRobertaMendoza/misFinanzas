const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "CategoryBill",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
