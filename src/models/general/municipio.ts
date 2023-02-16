// **************************************************************
// * Modelo Municipios
// *************************************************************
import  { DataTypes } from "sequelize";
import  { sequelize } from "../../database/config-mssql";

export const Municipio = sequelize.define("Municipio", {
  idmunicipio: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    autoIncrement: true,
  },
  idestado: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  idciudad: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  
   municipio: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  });
