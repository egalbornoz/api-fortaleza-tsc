import { sequelize } from '../../database/config-mssql';
import { DataTypes } from 'sequelize';


export const TipoIdentificacione = sequelize.define('TipoIdentificacione',{
   idtipoidentificacion:{
      primaryKey:true,
    type:DataTypes.TINYINT
   },
   codigo:{
    type:DataTypes.STRING(1)
   },
   descripcion:{
    type:DataTypes.STRING(100)
   }
});