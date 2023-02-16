/********************************************************************************
 * Importaciones necesarias
 ********************************************************************************/
import { Router } from 'express';
import { check } from 'express-validator';
import { usuariosDelete, usuariosGet, usuariosPost, usuariosPut } from '../controllers/usuarios';
import { Probando } from '../middlewares/validar-jwt';
// import { route } from './usuarios';
// import { login, googleSigin, renovarToken } from'../controllers/auth';
 import {validarJWT } from '../middlewares/validar-jwt';
const router =  Router();

/********************************************************************************
 * Rutas obtener usuarios - endPoint
 ********************************************************************************/
router.get('/',usuariosGet);

/********************************************************************************
 * Ruta para actualizar  usuario por Id - endPoint
 ********************************************************************************/
router.put('/:id', [
    
    // check('id', 'No es un ID válido').isMongoId(),
    // check('id').custom(existeUsuarioPorId),
    // check('rol').custom(isRolValid),
    // validarCampos,
], usuariosPut);
/********************************************************************************
 * Ruta para crear  usuario  - endPoint
 ********************************************************************************/
router.post('/', [
    // check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    // check('contraseña', 'La contraseña debe tener minimo 6 caracteres').isLength({ min: 6 }),
    // check('correo', 'El correo no es válido').isEmail(),
    // check('correo').custom(emailExiste),
    // check('rol').custom(isRolValid),
    // validarCampos
], usuariosPost);

/********************************************************************************
 * Ruta para eliminar usuario - endPoint
 ********************************************************************************/
router.delete('/:id', [
    // validarJWT,
    // esAdminRole,
    // tieneRole('ADMIN_ROLE', 'VENTAS_ROLE'),
    // check('id', 'No es un ID válido').isMongoId(),
    // check('id').custom(existeUsuarioPorId),
    // validarCampos
], usuariosDelete);
/********************************************************************************
 * Exportacion de las rutas usuarios - endPoint
 ********************************************************************************/
module.exports=router;