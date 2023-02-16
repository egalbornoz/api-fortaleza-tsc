// **************************************************************
// * Modelo Condiciones en el Pais
// *************************************************************
import  { DataTypes } from "sequelize";
import  { sequelize } from "../../database/config-mssql";
import { Cliente } from "../cliente";

export const CondicionPaise = sequelize.define("CondicionPaise", {
  idcondpais: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
  },
   nombre: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
   
  });
