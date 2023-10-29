const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
      "Card",
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
          bank_name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          branch: {
            type: DataTypes.STRING,
            allowNull: true,
          },
      },
      { timestamps: false }
    );
  };
  