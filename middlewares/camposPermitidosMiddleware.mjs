
// Esta función elimina campos con información indeseada en POST, PUT y PATCH
export function filtrarCamposPermitidos (camposPermitidos) { // Recibe array con campos válidos
    return (req, res, next) => {

        const camposRecibidos = Object.keys(req.body); // Se obtienen los datos enviados por el cliente

        const camposInvalidos = camposRecibidos.filter( // Se filtran los campos no permitidos
            campo => !camposPermitidos.includes(campo) // Se verifica que el campo esté en la lista, sino, es inválido
        );

        if (camposInvalidos.length > 0) { // Si hay al menos 1 campo inválido
            return res.status(400).json({ // Se corta la ejecución y devuleve error 400
                mensaje: "Campos no permitidos",
                camposInvalidos
            });
        }

        next(); // Si todo esta bien pasa al siguiente middleware o controlador
    };
}


/***** 
Este archivo se encarga de filtrar los datos o campos que son ingresados a la DB.
Algo así como una "White List" que proteje las colecciones de información indeseada.
*****/