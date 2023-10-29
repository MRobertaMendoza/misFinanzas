const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
      "Earning",
      {
          id: {
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
              primaryKey: true,
          },
          name: {
              type: DataTypes.STRING,
              allowNull: true,
          },
          amount: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
          },
      },
      { timestamps: false }
    );
  };