// Se crea esta clase base para definir las reglas
// Si las reglas no se cumplen, la app falla
class IRepository {
    obtenerPorId(id) {
        throw new Error ("Método 'obtenerPorId()' no implementado");
    }
    obtenerTodos() {
        throw new Error ("Método 'obtenerTodos()' no implementado");
    }
    buscarPorAtributo(atributo, valor) {
        throw new Error ("Método 'buscarPorAtributo()' no implementado");
    }
    obtenerMayoresDe30() {
        throw new Error ("Método 'obtenerMayoresDe30()' no implementado")
    }
}

export default IRepository;


/*****
Este archivo simula una interfaz en Javascript. Aquí se definen los métodos obligatorios
para asegurar que todos los repositorios mantengan una estructura consistente,
lanzando errores si no se implementan.
*****/