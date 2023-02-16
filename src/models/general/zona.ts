// **************************************************************
// * Modelo Zonas
// *************************************************************
import  { DataTypes } from "sequelize";
import  { sequelize } from "../../database/config-mssql";

export const Zona = sequelize.define("Zona", {
  idzona: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    autoIncrement: true,
  },
   nombre: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
   
  });
