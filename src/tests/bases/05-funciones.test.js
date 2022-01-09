import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../bases/05-funciones'

describe('Pruebas en 05-funciones', () => {
    test('getUser() debe retornar un objeto con el id y username', () => {
        const userTest = {
            id: 'ABC123',
            username: 'fersanti2896'
        }

        expect(getUser()).toEqual(userTest);
    });
   
    test('getUsuarioActivo() debe retornar un objeto con id y username, recibiendo una propiedad nombre', () => {
       const nombre = 'Wendy';
       const userTest = {
           id: 'ABC576', 
           username: 'Wendy'
       } 

       expect(getUsuarioActivo(nombre)).toEqual(userTest);
    });
});