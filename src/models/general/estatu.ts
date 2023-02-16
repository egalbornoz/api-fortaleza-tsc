// **************************************************************
// * Modelo Estatus
// *************************************************************
import  { DataTypes } from "sequelize";
import  { sequelize } from "../../database/config-mssql";

export const Estatu = sequelize.define("Estatu", {
  idestatus: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    autoIncrement: true,
  },
  
   nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  }
  });
