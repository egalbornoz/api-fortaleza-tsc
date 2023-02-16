/********************************************************************************
 * Importaciones necesaria
 ********************************************************************************/
import  { Request,Response, json } from 'express';
import  bcrypt from 'bcryptjs';
import  { Usuario, Estatu, Departamento, Cliente } from '../models/';


/********************************************************************************
 * Controlador para obtener los usuarios activos con estado:true y paginados limite=?
 ********************************************************************************/
export const usuariosGet = async (req: Request, res: Response) => {

    try {
        const usuarios = await Usuario.findAll({
            // where:{
            //   idusuario:1
            // },
             attributes: ['nombre','apellido','cedula','usuario','correo'],
             include: [
                    {
                      model: Estatu,
                      attributes: ['nombre'],
                    },
                    {
                      model: Departamento,
                        attributes: ['nombre','activo'],
                      }
                ],
                
        });
           res.json({ usuarios,msg:'CON TSC' });

    } catch (error) {
      res.status(500);
      res.send(error);
    };
}

/********************************************************************************
 * Controlador para actualizar los usuarios 
 ********************************************************************************/
export const usuariosPut = async (req:Request, res:Response) => {
    // const { id } = req.params; //Id configurado en la ruta router.put('/:id', usuariosPut);
    // const { _id, contraseña, google, correo, ...resto } = req.body; // se excluyen elementos y el resto se actualiza
  
    // if (contraseña) {
       const salt:string = bcrypt.genSaltSync();
       console.log(salt);
    //     resto.contraseña = bcrypt.hashSync(contraseña, salt);
    // }
    // const usuario = await Usuario.update(id, resto);

    // res.json(usuario);
}
/********************************************************************************
 * Controlador crear los usuarios
 ********************************************************************************/
export const usuariosPost = async (req:Request, res: Response) => {
    // const { nombre, correo, contraseña, rol } = req.body;
    // const usuario = new Usuario({ nombre, correo, contraseña, rol });
    // const salt = bcrypt.genSaltSync();

    // usuario.contraseña = bcrypt.hashSync(contraseña, salt);
    // await usuario.save();
    // res.json({
    //     msg: usuario
    // });
}
/********************************************************************************
 * Controlador elminar los usuarios  (Marcar estado=false)
 ********************************************************************************/
export const usuariosDelete = async (req:Request, res:Response) => {
    // const { id } = req.params;

    // const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });
    // const usuarioAut = req.usuario;

    // res.json({ usuario, usuarioAut });
}
