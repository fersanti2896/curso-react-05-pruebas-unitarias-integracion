import '@testing-library/jest-dom'
import { retornaArreglos } from '../../bases/07-desestructuracion-arr'

describe('Pruebas en 07-desestructuracion-arr' , () => {
    test('retornaArreglos() debe de retornar un string y un numero', () => {
        const [letras, numeros] = retornaArreglos()
        
        // expect(arr).toEqual(['ABC', 123]);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })
    
})