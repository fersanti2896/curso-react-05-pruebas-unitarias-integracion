import '@testing-library/jest-dom'
import { getSaludo } from "../../bases/02-template-string"

describe('Pruebas en 02-template-string', () => {
    test('Prueba en el metodo getSaludo(), debe retornar: Hola Fernando', () => {
        const nombre = 'Fernando';

        expect(getSaludo(nombre)).toBe('Hola ' + nombre);
    }); 

    test('Pruebas en getSaludo(), debe retornar: Hola Fersa!' , () => {
        expect(getSaludo()).toBe('Hola Fersa!');
    })
});


