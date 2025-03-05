//este archivo define una abstraccioón que otras clases de persistencia deben implementar:

export default class SuperheroesDataSource {
    obtenerTodos() {
        throw new Error('Método debe ser implementado por la subclase');
    }
}