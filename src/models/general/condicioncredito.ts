// **************************************************************
// * Modelo Condiciones Créditos
// *************************************************************
import  { DataTypes } from "sequelize";
import  { sequelize } from "../../database/config-mssql";

export const CondicionCredito = sequelize.define("CondicionCredito", {
  idcondcredito: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
  },
   valor: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
   
  });
