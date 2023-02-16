// **************************************************************
// * Modelo Estados
// *************************************************************
import  { DataTypes } from "sequelize";
import  { sequelize } from "../../database/config-mssql";

export const Ciudade = sequelize.define("Ciudade", {
  idciudad: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    autoIncrement: true,
  },
  idestado: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  
   ciudad: {
    type: DataTypes.STRING(60),
    allowNull: false,
   }
   });
