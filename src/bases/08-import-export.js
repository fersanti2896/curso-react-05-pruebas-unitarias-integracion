// Importar, exportar y funciones comunes de arreglos

import { heroes, owners } from '../data/heroes';
// import {heroes} from './data/heroes';

// const getHeroeById = (id) => {
//     return heroes.find((hero) => {
//         if (hero.id === id){
//             return true;
//         } else {
//             return false;
//         }
//     });
// }

const getHeroeById = (id) => {
    return heroes.find((hero) => hero.id === id);
}

// console.log(getHeroeById(4));

const getHeroeByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);

// console.log(getHeroeByOwner('Marvel'));
// console.log(owners);

export {
    getHeroeById,
    getHeroeByOwner
}