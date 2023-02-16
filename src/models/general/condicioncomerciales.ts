// **************************************************************
// * Modelo Condiciones Comerciales
// *************************************************************
import  { DataTypes } from "sequelize";
import  { sequelize } from "../../database/config-mssql";

export const CondicionComerciales = sequelize.define("CondicionComerciales", {
  idcondcomercial: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
  },
   nombre: {
    type: DataTypes.STRING(25),
    allowNull: false,
  }
  });
