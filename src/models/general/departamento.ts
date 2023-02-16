// **************************************************************
// * Modelo Departamento
// *************************************************************
import { DataTypes } from "sequelize";
import { sequelize } from "../../database/config-mssql";

export const Departamento = sequelize.define("Departamento", {
  iddepartamento: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
  },
   nombre: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
   
  activo: {
    type: DataTypes.BOOLEAN,
  },
});
