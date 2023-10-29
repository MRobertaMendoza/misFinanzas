const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
      },
      email:{
        type: DataTypes.STRING,
        allowNull: true,
        unique:true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      date: {
          type: DataTypes.DATEONLY,
          allowNull:true,
          defaultValue:DataTypes.NOW
      },
    },
    { timestamps: false }
  );
};
