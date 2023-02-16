/********************************************************************************
 *  Importaciones  Configuración de la Base de Datos
 ********************************************************************************/
import  { Sequelize } from 'sequelize';
/********************************************************************************
 *  Método para conectarse a la db
 ********************************************************************************/
//Configuración parametros de conexión
export const sequelize = new Sequelize(
  process.env.SQL_DB! ,
  process.env.USER_SQL_DB!,
  process.env.PASS_SQL_DB!,
  
  {
    host: process.env.HOST!,
    dialect: 'mssql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
  }
);

//Función de conexión y consulta
export const dbConnection = async () => {
  try {
    await sequelize.sync();
    console.log("Base de datos SQL ONLINE");
  } catch (error) {
    console.log(error)
    console.log('NO SE PUDO CONECTAR CON LA BASE DE DATOS')
  }
};
