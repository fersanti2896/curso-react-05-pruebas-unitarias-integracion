import '@testing-library/jest-dom'
import { getImagen } from '../../bases/11-async-await'

describe('Pruebas en 11-async-await', () => {
    test('getImagen() debe retornar un url', async() => {
        const url = await getImagen();

        expect(typeof url).toBe('string');
    });
    
})