const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Bill",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        amount:{
          type: DataTypes.INTEGER,
          allowNull: true,

        },
       frequency:{
        type: DataTypes.INTEGER,
        allowNull: false,
       },
       date:{
        type: DataTypes.DATEONLY,
        allowNull:true,
       },
       name:{
        type:DataTypes.STRING,
        allowNull:true,
       },
       payment_method:{
        type: DataTypes.BOOLEAN,
        allowNull:true,
       }
    },
    { timestamps: false }
  );
};
