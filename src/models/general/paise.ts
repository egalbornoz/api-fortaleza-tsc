// **************************************************************
// * Modelo Paises
// *************************************************************
import  { DataTypes } from "sequelize";
import  { sequelize } from "../../database/config-mssql";

export const Paise = sequelize.define("Paise", {
  idpais: {
    type: DataTypes.SMALLINT,
    primaryKey: true,
    autoIncrement: true,
  },
  
   pais: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
   alfa2: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
   alfa3: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
   codigonumerico: {
    type: DataTypes.STRING(4),
    allowNull: false,
  },
   nombreiso: {
    type: DataTypes.STRING(60),
    allowNull: false,
  }
  });
