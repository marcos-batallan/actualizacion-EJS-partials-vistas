// Se importa Express para poder usar su sistema de rutas
import express from 'express';

// Se importan las funciones del controlador, cada una de ellas maneja una HTTP específica
import { 
    obtenerSuperheroePorIdController, 
    obtenerTodosLosSuperheroesAPIController, 
    buscarSuperheroePorAtributoController, 
    obtenerSuperheroesMayoresDe30Controller,
    crearSuperheroeController,
    actualizarSuperheroeController,
    actualizarParcialSuperheroeController,
    eliminarSuperheroePorNombreController,
    eliminarSuperheroeporIdController,
    agregarSuperheroeControllerEJS,
    editarSuperheroeControllerEJS,
    eliminarSuperheroeControllerEJS
} from '../controllers/superheroesController.mjs';

// Se importa la función de validación (express-validator)
import {
    obtenerSuperheroePorIdValidations,
    buscarSuperheroePorAtributoValidations,
    crearSuperheroeValidations,
    actualizarSuperheroeValidations,
    actualizarParcialSuperheroeValidations,
    eliminarSuperheroePorNombreValidations,
    eliminarSuperheroePorIdValidations
 } from '../validators/superheroValidator.mjs';


// Se importa la función de validación del middleware
import { validarCampos } from '../middlewares/validationMiddleware.mjs';

// Se importa la función para el filtro de campos inválidos
//import { filtrarCamposPermitidos } from '../middlewares/camposPermitidosMiddleware.mjs';

// Se crea en servidor de rutas para agrupar los endpoints, modularizar y mantener limpio el app.mjs
const router = express.Router();

// Crear nuevo Superhéroe - VISTA EJS
router.post(
    "/heroes/agregar",
    (req, res, next) => {
        req.view = "addSuperhero"; // 👈 clave
        next();
    },
    crearSuperheroeValidations,
    validarCampos,
    agregarSuperheroeControllerEJS
);

// Editar algún Superhéroe - VISTA EJS
router.put(
    "/heroes/:id/editar",
    actualizarSuperheroeValidations,
    validarCampos,
    editarSuperheroeControllerEJS
);

// Obtener Superhéroes +30 (parámetro estático)
router.get (
    '/heroes/mayores-30',
    obtenerSuperheroesMayoresDe30Controller
);

// Buscar Superhéroes por atributos dinámicos
router.get (
    '/heroes/buscar/:atributo/:valor',
    buscarSuperheroePorAtributoValidations,
    validarCampos,
    buscarSuperheroePorAtributoController);

// Obtener toda la colección de Superhéroes
router.get (
    '/heroes',
    obtenerTodosLosSuperheroesAPIController
);

// Obtener Superhéroe por ID (parámetro dinámico)
router.get (
    '/heroes/:id',
    obtenerSuperheroePorIdValidations,
    validarCampos,
    obtenerSuperheroePorIdController);

/***** A PARTIR DE AQUÍ SE AGREGAN LAS RUTAS PARA ACCEDER 
A LOS ENPOINTS PARA LOS METODOS POST, PUT Y DELETE
SOLICITADOS PARA EL TP1 DEL SPRINT 3 *****/

// Crear nuevo Superhéroe en la colección (método POST)
router.post (
    '/heroes',
    /*filtrarCamposPermitidos ([
        "nombreSuperHeroe",
        "nombreReal",
        "edad",
        "planetaOrigen",
        "debilidad",
        "poderes",
        "aliados",
        "enemigos",
        "creator"
    ]),*/
    crearSuperheroeValidations,
    validarCampos,
    crearSuperheroeController
);

// Actualización completa de Superhéroe en la DB (método PUT)
router.put (
    "/heroes/:id",
    /*filtrarCamposPermitidos ([
        "nombreSuperHeroe",
        "nombreReal",
        "edad",
        "planetaOrigen",
        "debilidad",
        "poderes",
        "aliados",
        "enemigos",
        "creator"
    ]),*/
    actualizarSuperheroeValidations,
    validarCampos,
    actualizarSuperheroeController
);

// Actualización parcial de Superhéroe (método PATCH)
router.patch(
    "/heroes/:id",
    /*filtrarCamposPermitidos ([
        "nombreSuperHeroe",
        "nombreReal",
        "edad",
        "planetaOrigen",
        "debilidad",
        "poderes",
        "aliados",
        "enemigos",
        "creator"
    ]),*/
    actualizarParcialSuperheroeValidations,
    validarCampos,
    actualizarParcialSuperheroeController
);

// Eliminar Superhéroe de la colección (Por nombre)
router.delete(
    '/heroes/nombre/:nombre',
    eliminarSuperheroePorNombreValidations,
    validarCampos,
    eliminarSuperheroePorNombreController
);

// Eliminar Superhéroe de la colección (Por Id)
router.delete(
    '/heroes/:id',
    eliminarSuperheroePorIdValidations,
    validarCampos,
    eliminarSuperheroeporIdController
);

// // Eliminar Superhéroe de la colección - Vista EJS
router.delete(
    "/heroes/:id/eliminar",
    eliminarSuperheroePorIdValidations,
    validarCampos,
    eliminarSuperheroeControllerEJS
);


// Se exporta el router que será utilizado en app.mjs
export default router;


/***** 
En este archivo se definen los endpoints de la API y conectan cada dirección URL
con su controlador correspondiente, realizando las validaciones necesarias para cada ruta.
*****/