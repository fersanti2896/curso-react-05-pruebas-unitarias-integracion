/* Promesas */

import { getHeroeById } from "./08-import-export";

export const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);

            (heroe) ? resolve(heroe) : reject('No se pudo encontrar el heroe')
        }, 1500);
    });
}

/* getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn); */
