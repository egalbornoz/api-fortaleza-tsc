// **************************************************************
// * Modelo Estados
// *************************************************************
import  { DataTypes } from "sequelize";
import  { sequelize } from "../../database/config-mssql";

export const Sectore = sequelize.define("Sectore", {
  idsector: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    autoIncrement: true,
  },
  idmunicipio: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  
   sector: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
   codigopostal: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
   
  });
