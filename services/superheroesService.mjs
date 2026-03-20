// Se importa el repositorio - no se comunica directo a la DB
import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';

// Todas las funciones son async porque dependen de las operaciones en la DB

 // Obtiene el Id del Controller, llama al repo y devuelve el resultado
export async function obtenerSuperheroePorId (id) {
    return await SuperHeroRepository.obtenerPorId(id);
}

//Devuelve la colección completa
export async function obtenerTodosLosSuperheroes () {
    return await SuperHeroRepository.obtenerTodos();
}

// Busca por atributos variable, permite consultas flexibles
export async function buscarSuperheroePorAtributo (atributo, valor) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

// Engloba la regla del negocio: filtrar por edad
export async function obtenerSuperheroesMayoresDe30 () {
    return await SuperHeroRepository.obtenerMayoresDe30();
}


/*****
Este archivo contiene la lógica del negocio, no se relaciona con el HTTP ni con Express.
Recibe la solicitud y pide los datos al repositorio
*****/