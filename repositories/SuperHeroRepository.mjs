// Se importa el esquema definido en el modelo para consultar la DB
import SuperHero from "../models/SuperHero.mjs";

// Se importa la interfaz base
import IRepository from "./IRepository.mjs";

// Esta repo debe cumplir con el contrato de herencia de IRepository
class SuperHeroRepository extends IRepository {
    async obtenerMayoresDe30 () {
    // Se implementa un filtro por edad usando el operador de
    // comparación $gt de MongoDB para traer documentos cuya edad sea mayor a 30.
    return await SuperHero.find({ edad: { $gt: 30 } });
    }
    
    async buscarPorAtributo (atributo, valor) {
    // Los corchetes indican que el nombre del campo “atributo” lo tengo en una variable
    return await SuperHero.find({ [atributo]: valor });
    }
    
    async obtenerPorId (id) {
        return await SuperHero.findById(id);
    }

    async obtenerTodos () {
        return await SuperHero.find({});
    }
}

//Devuelve los datos de la DB
export default new SuperHeroRepository(); 


/*****
Este archivo encapsula el acceso a los datos y centraliza las consultas a la DB
*****/