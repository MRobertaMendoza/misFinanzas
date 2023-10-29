const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Saving",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        total: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
    },
    { timestamps: false }
  );
};
