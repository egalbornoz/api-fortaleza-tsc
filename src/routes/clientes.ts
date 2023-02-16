/**********************************************************************************
 *     IMPORTACIONES NECESARIAS
 **********************************************************************************/
import { Router } from 'express';
import { clienteGetById, clientesGet } from '../controllers/clientes';

const router =  Router();

/*********************************************************************************
 *    DEFINICION DE END-POINT O RUTAS CLIENTES
 *********************************************************************************/
router.get('/',
clientesGet);

/*********************************************************************************
 *    DEFINICION DE END-POINT O OBTENER CLIENTE POR ID
 *********************************************************************************/
router.get('/:id',
clienteGetById);

module.exports = router;