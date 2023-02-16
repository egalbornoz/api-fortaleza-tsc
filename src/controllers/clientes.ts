/**********************************************************************
 *    IMPORTACIONES NECEARIAS
 **********************************************************************/
import { request, response  } from 'express';
import { Cliente, CondicionPaise, Paise, TipoIdentificacione } from '../models';


/********************************************************************************
 * Controlador para obtener los Clientes
 ********************************************************************************/
export const clientesGet = async (req = request, res = response) => { 
    try {
      // Consulta Clientes
        const clientes = await Cliente.findAll({
             attributes: ['numeroidentificacion','razonsocial','dircomercial'],
             include: [
                    {
                      model: TipoIdentificacione,
                      attributes: ['codigo','descripcion'],
                    },
                ],
        });
             
        //    res.json({ clientes });
        res.json({
            clientes
        });

    } catch (error) {
      res.status(500);
      res.send(error);
    };
}
/********************************************************************************
 * Controlador para obtener los Clientes
 ********************************************************************************/
export const clienteGetById = async (req = request, res = response) => { 
  // console.log(req.params);
  const { id } = req.params;
  try {
    // Consulta Clientes
      const cliente = await Cliente.findOne({
        where:{
         idcliente:id
        },
           attributes: ['numeroidentificacion','razonsocial','dircomercial','idcondpais'],
           include: [
                  {
                    model: TipoIdentificacione,
                    attributes: ['codigo','descripcion'],
                  },
              ],
      });
      const idcondpais =cliente?.dataValues.idcondpais;
      if(idcondpais){
          
        const condpais = await CondicionPaise.findOne({
           where:{idcondpais:idcondpais},
           attributes:['nombre']
});
       const cond ={ condpais};
       cliente.dataValues.condpais=condpais; 

 }

      res.json(
          cliente, 
      );
  } catch (error) {
    res.status(500);
    res.send(error);
  };
}
