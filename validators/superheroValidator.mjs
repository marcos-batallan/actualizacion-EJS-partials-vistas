import { body, param } from "express-validator";

// Helper para normalizar poderes
const normalizarArrayStrings = value => {
    if (typeof value === "string") {
        return value
            .split(",")
            .map(v => v.trim())
            .filter(v => v.length > 0);
    }
    return value;
};

// Función para validar por Id en el método GET
export const obtenerSuperheroePorIdValidations = [

    param("id")
        .isMongoId()
        .withMessage("El ID debe ser un ObjectId válido")
];

// Función para validar por Atributo en el método GET
const atributosPermitidos = [
    "nombreSuperHeroe",
    "nombreReal",
    "planetaOrigen"
];

export const buscarSuperheroePorAtributoValidations = [
    
    param("atributo")
        .isIn(atributosPermitidos)
        .withMessage("Atributo no permitido"),

    param("valor")
        .trim()
        .isLength({ min: 1 })
        .withMessage("El valor no puede estar vacío")
];


// Función para validar los datos en el método POST
export const crearSuperheroeValidations = [

    body('nombreSuperHeroe')
        .trim()
        .notEmpty().withMessage("El nombre del Superhéroe es obligatorio")
        .isLength({ min: 3, max: 60 }).withMessage("El nombre debe tener entre 3 y 60 caracteres"),
    
    body("nombreReal")
        .trim()
        .notEmpty().withMessage("El nombre real es obligatorio")
        .isLength({ min: 3, max: 60 }).withMessage("El nombre debe tener entre 3 y 60 caracteres"),

    body("edad")
        .notEmpty().withMessage("La edad es obligatoria")
        .bail()
        .isNumeric().withMessage("Debe ser un número")
        .bail()
        .toInt()
        .isInt({ min: 0 }).withMessage("Debe ser un número entero mayor o igual a 0"),

    body("poderes")
    .customSanitizer(normalizarArrayStrings)
    .isArray({ min: 1 })
    .withMessage("Debe ser un array con al menos un poder"),

    body("poderes.*")
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage("Cada poder debe tener entre 3 y 60 caracteres")
];


// Función para validar datos en el método PUT (actualización completa de datos)
export const actualizarSuperheroeValidations = [

    // Validar ID
    param("id")
        .isMongoId().withMessage("ID inválido"),

    // nombreSuperHeroe
    body('nombreSuperHeroe')
        .trim()
        .notEmpty().withMessage("El nombre del Superhéroe es obligatorio")
        .bail()
        .isLength({ min: 3, max: 60 }).withMessage("Debe tener entre 3 y 60 caracteres"),

    // nombreReal
    body("nombreReal")
        .trim()
        .notEmpty().withMessage("El nombre real es obligatorio")
        .bail()
        .isLength({ min: 3, max: 60 }),

    // edad
    body("edad")
    .notEmpty().withMessage("La edad es obligatoria")
    .bail()
    .isNumeric().withMessage("Debe ser un número")
    .bail()
    .toInt()
    .isInt({ min: 0 }).withMessage("Debe ser un número entero mayor o igual a 0"),

    // poderes
    body("poderes")
    .customSanitizer(normalizarArrayStrings)
    .isArray({ min: 1 }).withMessage("Debe ser un array con al menos un poder"),

    body("poderes.*")
        .trim()
        .isLength({ min: 3, max: 60 }).withMessage("Cada poder debe tener entre 3 y 60 caracteres")
];

// Función para validar datos en el método PATCH (actualización parcial de datos)
export const actualizarParcialSuperheroeValidations = [
    
    // Validar ID
    param("id")
        .isMongoId().withMessage("ID inválido")
        .bail(),

    // nombreSuperHeroe
    body('nombreSuperHeroe')
        .optional()
        .trim()
        .isLength({ min: 3, max: 60 })
        .withMessage("Debe tener entre 3 y 60 caracteres"),

    // nombreReal
    body("nombreReal")
        .optional()
        .trim()
        .isLength({ min: 3, max: 60 }),

    // edad
    body("edad")
        .optional()
        .isNumeric().withMessage("Debe ser un número")
        .bail()
        .toInt()
        .isInt({ min: 0 }).withMessage("Debe ser un número entero mayor o igual a 0"),

    // poderes
    body("poderes")
    .optional()
    .customSanitizer(normalizarArrayStrings)
    .isArray({ min: 1 }).withMessage("Debe ser un array con al menos un poder"),

    body("poderes.*")
        .optional()
        .trim()
        .isLength({ min: 3, max: 60 })
        .withMessage("Cada poder debe tener entre 3 y 60 caracteres")
];


// Función para validar por Nombre en el método DELETE
export const eliminarSuperheroePorNombreValidations = [

    param("nombre")
        .trim()
        .notEmpty().withMessage("El nombre es obligatorio")
        .bail()
        .isLength({ min: 3, max: 60 })
        .withMessage("El nombre debe tener entre 3 y 60 caracteres")
];


// Función para validar por ID en el método DELETE
export const eliminarSuperheroePorIdValidations = [

    param("id")
        .isMongoId()
        .withMessage("El ID debe ser válido")
];


/***** 
Este archivo se encarga de definir las reglas que deben cumplir los datos que llegan a la API,
controla y verifica que el formato y el contenifo que envía el cliente sea válido antes de procesarlo. 
*****/