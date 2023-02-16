// **************************************************************
// * Modelo Clasificación de Clientes
// *************************************************************
import  { DataTypes } from "sequelize";
import  { sequelize } from "../../database/config-mssql";

export const ClasificacionCliente = sequelize.define("ClasificacionCliente", {
  idclascli: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
  },
   codigo: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
   nombre: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
   rangoinicial: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
   rangofinal: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
   descuento: {
    type: DataTypes.DECIMAL(6,2),
    allowNull: false,
  },
   
  });
