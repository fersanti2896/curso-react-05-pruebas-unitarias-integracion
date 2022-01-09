import '@testing-library/jest-dom'
import { getHeroeByIdAsync } from '../../bases/09-promesas'
import { heroes } from '../../data/heroes';

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync() debe retornar un heroe async con done', (done) => {
        const id = 2;
        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toBe(heroes[1]);
            done();
        })
    });
    
    test('getHeroeByIdAsync() debe retornar mensaje de que no se pudo encontrar el heroe con done', (done) => {
        const id = 7;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el heroe');
            done();
        })
    });

    test('getHeroeByIdAsync() debe retornar un heroe async usando resolve', () => {
        const id = 2;

        return expect(getHeroeByIdAsync(id)).resolves.toBe(heroes[1]);
    });
    
    test('getHeroeByIdAsync() debe retornar mensaje de que no se pudo encontrar el heroe con reject', () => {
        const id = 7;
        
        return expect(getHeroeByIdAsync(id)).rejects.toMatch('No se pudo encontrar el heroe');
    });
});