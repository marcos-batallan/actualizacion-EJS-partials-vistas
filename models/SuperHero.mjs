// Aquí la importación de mongoose permite crear el esquema, definir el modelo y realizar las validaciones de datos
import mongoose from "mongoose";

// Cada Superhéroe almacenado en la DB respetará esta estructura
const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { 
        type: String, // Tipo texto
        required: [true, "El nombre del superhéroe es obligatorio"], // Campo requerido

        /*** Aquí se agregan las validaciones del modelo para el nombre del Superhéroe ***/

        trim: true, // Elimina los espacios en blanco al principio y al final
        minlength: [3, "Debe tener al menos 3 caracteres"], // 3 caracteres mínimo
        maxlength: [60, "Debe tener 60 caracteres como máximo"], // 60 caracteres máximo
    },
    nombreReal: { 
        type: String,
        required: [true, "El nombre real es obligatorio"],
        trim: true,
        minlength: [3, "Debe tener al menos 3 caracteres"],
        maxlength: [60, "Debe tener 60 caracteres como máximo"]
    },
    edad: {
        type: Number,
        required: [true, "La edad es obligatoria"],
        min: [0, "La edad no puede ser negativa"] // valor numérico positivo
    }, 
    planetaOrigen: {
        type: String,
        default: 'desconocido', // si no se envía el dato = desconocido
        trim: true
    }, 
    debilidad: {
        type: String,
        trim: true
    },
    poderes: {
        type: [String], // Lista de texto
        required: [true, "Los poderes son obligatorios"], // Este campo no puede faltar
        validate: { // Se define una validación personalizada. Mongoose no valida arrays por defecto
            validator: function (poderes) { // Función que recibe el valor del campo (poderes)
                return poderes.length > 0 && // Verifica que el array no esté vacío
                    poderes.every (p => // Recorre todos los elementos
                    typeof p === "string" && // Cada elemento debe ser string
                    p.trim().length >= 3 && //Elimina espacios y valida mínimo 3 caracteres
                    p.trim().length <= 60 // Elimina espacios y valida máximo 60 caracteres
                );
            },
            message: "Cada poder debe tener entre 3 y 60 caracteres y no estar vacío" // Si algo falla
        }
    },
    aliados: [String], //array de nombres
    enemigos: [String], //también array de nombres
    creator: String, //autor del personaje creado
    createdAt: {
        type: Date,
        default: Date.now  //fecha de cración
    }
});

// Esto convierte el schema en un Modelo, que es la interfaz para los métodos CRUD
// SuperHero: Nombre interno del modelo
// superheroSchema: la estructura definida antes
// Grupo-02: Nombre exacto de la colección en la base
const SuperHero = mongoose.model ('SuperHero', superheroSchema, 'Grupo-02');

// Se exporta el modelo para usarlo en el Repository = consultas a la DB
export default SuperHero;

/****** 
Este archivo es la definición de la estructura de datos

El flujo sería: Controller → Service → Repository → Modelo → MongoDB

El Repository importa este modelo para hacer consultas. Aquí se define la estructura,
validaciones y reglas de los datos antes de guardarlos en la base.

*****/