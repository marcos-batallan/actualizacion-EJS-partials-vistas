// Se importa Express para poder usar su sistema de rutas
import express from 'express';

// Se importan las funciones del controlador, cada una de ellas maneja una HTTP específica
import { 
    obtenerSuperheroePorIdController, 
    obtenerTodosLosSuperheroesController, 
    buscarSuperheroePorAtributoController, 
    obtenerSuperheroesMayoresDe30Controller 
} from '../controllers/superheroesController.mjs';

// Se crea en servidor de rutas para agrupar los endpoints, modularizar y mantener limpio el app.mjs
const router = express.Router();

// Obtener Superhéroes +30 (parámetro estático)
router.get ('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

// Buscar Superhéroes por atributos dinámicos
router.get ('/heroes/buscar/:atributo/:valor', buscarSuperheroePorAtributoController);

// Obtener toda la colección de Superhéroes
router.get ('/heroes', obtenerTodosLosSuperheroesController);

// Obtener Superhéroe por ID (parámetro dinámico)
router.get ('/heroes/:id', obtenerSuperheroePorIdController);

// Se exporta el router que será utilizado en app.mjs
export default router;


/***** 
En este archivo se definen los endpoints de la API y conectan cada dirección URL con su controlador correspondiente.
*****/