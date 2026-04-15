// Se importa esta función que se encargará de obtener los errores de validación
import { validationResult } from "express-validator";

// Se define el middleware de Express
export function validarCampos(req, res, next) {
    const errores = validationResult(req); //Aquí se recuperan los errores de validación del request

    if (!errores.isEmpty()) { // Si hay errores entra
        return res.status(400).json({ // corta la ejecución y devuelve error 400 (Bad Request)
            errores: errores.array() // Convierte los errores en un array legible
        });
    }

    next(); // Continúa al siguiente middleware o al controler
}


/***** 
Este archivo se encarga de recoger los errores de express-validator y decide si continuar o cortar la ejecución.
*****/