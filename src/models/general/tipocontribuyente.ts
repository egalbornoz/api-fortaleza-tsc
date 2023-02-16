// **************************************************************
// * Modelo Tipos de Contribuyente
// *************************************************************
import  { DataTypes } from "sequelize";
import  { sequelize } from "../../database/config-mssql";

export const TipoContribuyente = sequelize.define("TipoContribuyente", {
  idtipocontribuyente: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
  },
   tipocontribuyente: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  });
