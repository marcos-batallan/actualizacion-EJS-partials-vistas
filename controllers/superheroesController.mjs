// Se importa la capa de servicios y se le delega a ella la lógica
import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroePorAtributo, obtenerSuperheroesMayoresDe30 } from "../services/superheroesService.mjs";

// Se importa la capa de vista para dar formato a las respuestas
import { renderizarSuperheroe, renderizarListaSuperheroes } from "../views/responseView.mjs";

// Función obtener Superhéroe por Id
export async function obtenerSuperheroePorIdController (req, res) {
    try {
        const { id } = req.params; // Leer el parámetro de ruta => GET /heroes/:id
        const superheroe = await obtenerSuperheroePorId(id); // Llama a la fn del service
        if (!superheroe) { // Se valida la existencia del parámetro
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' }); //404 si no existe
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe); // Se da formato a la respuesta
        res.status(200).json(superheroeFormateado); // Se envía la respuesta
    } catch (error) { // Mensaje de error del servidor
        res.status(500).send({ mensaje: 'Error al obtener el Superhéroe', error: error.message });
    }
}


// Función obtener todos los Superhéroes existentes en la DB
export async function obtenerTodosLosSuperheroesController (req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes(); // Llama a la fn del service
        
        const superheroesFormateados = renderizarListaSuperheroes(superheroes); // Se da formato a la respuesta
        res.status(200).json(superheroesFormateados); // Devuelve respuesta en JSON
    } catch (error) { // Mensaje de error del servidor
        res.status(500).send({ mensaje: 'Error al obtener los Superhéroes', error: error.message })
    }
}


// Función buscar Superhéroes por atributo dinámico
export async function buscarSuperheroePorAtributoController (req, res) {
    try {
        const { atributo, valor } = req.params; // Leer parámetros dinámicos => GET heroes/buscar/planetaOrigen/Tierra
        const superheroes = await buscarSuperheroePorAtributo (atributo, valor); // Llama a la fn del service
        if (superheroes.length === 0) { // Se validan los datos
            return res.status(404).send({ mensaje: 'No se encontraron Superhéroes con ese atributo' }); //404 si no existe
        }

        const superheroesFormateados = renderizarListaSuperheroes(superheroes); // Se da formato a la respuesta
        res.status(200).json(superheroesFormateados); // Devuelve respuesta en JSON
    } catch (error) { // Mensaje de error del servidor
        res.status(500).send({ mensaje: 'Error al buscar los Superhéroes', error: error.message });
    }
}


// Función obtener Superhéroes con más de 30 años
export async function obtenerSuperheroesMayoresDe30Controller (req, res) {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30 (); // Llama a la fn del service
        if (superheroes.length === 0) { // Se validan los datos
            return res.status(404).send({ mensaje: 'No se encontraron Superhéroes mayores de 30 años' }); //404 si no existe
        }

        const superheroesFormateados = renderizarListaSuperheroes(superheroes); // Se da formato a la respuesta
        res.status(200).json(superheroesFormateados); // Devuelve respuesta en JSON
    } catch (error) { // Mensaje de error del servidor
        res.status(500).send({ mensaje: 'Error al obtener Superhéroes mayores de 30 años', error: error.message });
    }
}


/*****
Este archivo es el intermediario entre el HTTP y la lógica interna.
Cumple la función de leer datos del request, llamar a la lógica de negocio en Services, 
manejar errores y devolver la respuesta HTTP al cliente.
*****/