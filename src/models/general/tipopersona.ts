// **************************************************************
// * Modelo Tipo de Persona
// *************************************************************
import  { DataTypes } from "sequelize";
import  { sequelize } from "../../database/config-mssql";

export const TipoPersona = sequelize.define("TipoPersona", {
  idtipopersona: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
  },
   tipopersona: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
   
  });
