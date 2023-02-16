/******************************************************************
*  Importaciones
 ******************************************************************/
import { Router } from 'express';
import { check } from 'express-validator';
import { Probando } from '../middlewares/validar-jwt';
// import { route } from './usuarios';
// import { login, googleSigin, renovarToken } from'../controllers/auth';
// import { validarCampos, validarJWT } from '../middlewares';
export const router =  Router();
/******************************************************************
*  Ruta /   - Validar JWT
 ******************************************************************/
router.get('/',Probando
);
/******************************************************************
*  Ruta /login - endPoint
 ******************************************************************/
// router.post('/login', [
//     check('correo', 'El correo es obligatorio').isEmail(),
//     check('contraseña', 'La contraseña es obligatoria').not().isEmpty(),
//     validarCampos

// ], login);
// /******************************************************************
// *  Ruta /google - endPoint
//  ******************************************************************/
// router.post('/google', [
//     check('id_token', 'El id token es necesario').not().isEmpty(),
//     validarCampos

// ], googleSigin);

module.exports = router;