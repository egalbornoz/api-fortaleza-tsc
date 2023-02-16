// *******************************************************************************
//  *  Clase Server
//  ********************************************************************************
import express,{Application} from 'express';
import cors from 'cors';
import { dbConnection } from '../database/config-mssql';
import { createServer } from 'http';

 export default class Server {
    //  [x: string]: any;
    private port:string;
    private app:Application;
    private server:any;
    private path:any;

    constructor() {
        this.app = express();
        this.port = process.env.PORT ||'8000';
        //Configuración del socket server
        this.server = createServer(this.app);



        this.path = {
            auth: '/api/auth',
            buscar: '/api/buscar',
            categorias: '/api/categorias',
            productos: '/api/productos',
            uploads: '/api/uploads',
            usuarios: '/api/usuarios',
            pacientes: '/api/pacientes',
            citamedicas: '/api/citamedicas',
            clientes:'/api/clientes',
        }
        // Conectar a la Base de Datos
        this.conectionDB();
        // Middlewares
        this.middleware();
        //Rutas de mi aplicación    
        this.routes();

    }
    async conectionDB() {
        await dbConnection();
    }
    middleware() {

        //Cors limitar accesos al api
        this.app.use(cors());
        // Parseo y lectura del body
        this.app.use(express.json())
        // Directorio Público
        this.app.use(express.static('public'));
        //File Uploads - Carga de Archivos
    }

    routes() {
        //  Aqui se configuran las rutas a acceder desde  mi controlador
         this.app.use(this.path.auth, require('../routes/auth'));
        // this.app.use(this.path.buscar, require('../routes/buscar'));
        this.app.use(this.path.usuarios, require('../routes/usuarios'));
        // this.app.use(this.path.uploads, require('../routes/uploads'));
        // this.app.use(this.path.categorias, require('../routes/categorias'));
        // this.app.use(this.path.citamedicas, require('../routes/citamedica'));
        // this.app.use(this.path.pacientes, require('../routes/pacientes'));
        // this.app.use(this.path.productos, require('../routes/productos'));
         this.app.use(this.path.clientes,require('../routes/clientes'));
    }

     listen() {
        this.server.listen(this.port, () => {
            console.log(`Server activo por el puerto ${this.port}`)

        });
    }
}