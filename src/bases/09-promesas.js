/* Promesas */

import { getHeroeById } from "./bases/08-import-export";

/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        resolve(heroe);
    }, 2000);
});

promesa.then((heroe) => {
    console.log('Heroe:', heroe)
}) */

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);

            (heroe) ? resolve(heroe): reject('No se pudo encontrar el heroe')
        }, 2000);
    });
}

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn);