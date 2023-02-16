// **************************************************************
// * Modelo Estados
// *************************************************************
import  { DataTypes } from "sequelize";
import  { sequelize } from "../../database/config-mssql";

export const Estado = sequelize.define("Estado", {
  idestado: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    autoIncrement: true,
  },
  idpais: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  
   estado: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
   codigoalfa2: {
    type: DataTypes.STRING(4),
    allowNull: false,
  },
  });
