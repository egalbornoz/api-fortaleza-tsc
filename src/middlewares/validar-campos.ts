/********************************************************************************
 *  Importaciones
 ********************************************************************************/
import  { validationResult } from 'express-validator';
/********************************************************************************
 *  Middlewares para validar campos
 ********************************************************************************/
export const validarCampos = (req:any, res:any, next:any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
}
