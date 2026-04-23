// Se importa esta función que se encargará de obtener los errores de validación
import { validationResult } from "express-validator";

// Se define el middleware de Express
export function validarCampos(req, res, next) {
    const errores = validationResult(req); //Aquí se recuperan los errores de validación del request

    if (!errores.isEmpty()) { // Si hay errores entra

        // Si viene de formulario (EJS)
        if (req.headers["content-type"]?.includes("application/x-www-form-urlencoded")) {
            return res.status(400).render(req.view || "addSuperhero", {
                errores: errores.array(),
                datos: req.body
            });
        }

        // Si es API (Postman)
        return res.status(400).json({
            errores: errores.array()
        });
    }

    next(); // Continúa al siguiente middleware o al controler
}


/***** 
Este archivo se encarga de recoger los errores de express-validator y decide si continuar o cortar la ejecución.
*****/