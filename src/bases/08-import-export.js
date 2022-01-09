// Importar, exportar y funciones comunes de arreglos

import { heroes, owners } from '../data/heroes';

const getHeroeById = (id) => {
    return heroes.find((hero) => hero.id === id);
}

const getHeroeByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);

export {
    getHeroeById,
    getHeroeByOwner
}