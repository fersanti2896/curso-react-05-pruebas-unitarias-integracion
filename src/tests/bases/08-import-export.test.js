import '@testing-library/jest-dom'
import { getHeroeById, getHeroeByOwner } from '../../bases/08-import-export';
import { heroes } from '../../data/heroes';

describe('Pruebas en 08-import-export', () => {
    test('getHeroeById() debe retornar un heroe por id', () => {
        const id = 2;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find((h) => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('getHeroeById() debe retornar un undefined de un heroe que no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('getHeroeByOwner() debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroe = getHeroeByOwner(owner);
        const arrHeroe = heroes.filter((h) => h.owner === owner);

        expect(heroe).toEqual(arrHeroe);
    });

    test('getHeroeByOwner() debe retornar un arreglo con la longitud los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroeByOwner(owner);

        expect(heroe.length).toBe(2);
    });

    test('getHeroeByOwner() debe retornar [] si no existe el owner', () => {
        const owner = 'Marvelss';
        const heroe = getHeroeByOwner(owner);

        expect(heroe).toEqual([]);
    });
})