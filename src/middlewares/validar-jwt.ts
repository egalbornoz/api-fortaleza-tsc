/********************************************************************************
 *  Importaciones
 ********************************************************************************/
const { response } = require('express');
const jwt = require('jsonwebtoken');
// const { estimatedDocumentCount } = require('../models/usuario');
// const Usuario = require('../models/usuario');

/********************************************************************************
 *  Método para validar token recibido del header
 ********************************************************************************/
export const validarJWT = async (req:any, res:any = response, next:any) => {
   
    const token = req.header('token');
    //Validar que se ha recibido un token
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición '
        });
    }
    // Validar que el token este firmado
    // try {
        // const { uid } = jwt.verify(token, process.env.SECRET_JWT);
        // const usuario = await Usuario.findById(uid);
        // req.usuario = usuario;
        // Verifico usuari exista

       
        //Verificar que el usuario tenga estado = true
       
        next();
    
    // }
}
export const Probando =async (req:any, res:any = response, next:any)=>{
    console.log('OK')
    next();

}
