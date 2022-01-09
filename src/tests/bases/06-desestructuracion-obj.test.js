import '@testing-library/jest-dom'
import { usContext } from '../../bases/06-desestructuracion-obj'

describe('Pruebas en 06-desestructuracion-obj', () => {
    test('usContext() debe retornar un string y 3 number', () => {
        const persona = {
            nombre: 'Tony', 
            edad: 45, 
            clave: 'Iroman'
        };

        const {nombreClave, anios, latlng: {lat, lng}} = usContext(persona)
        
        expect(nombreClave).toBe('Iroman');
        expect(typeof nombreClave).toBe('string');

        expect(anios).toBe(45);
        expect(typeof anios).toBe('number');

        expect(lat).toBe(14.12122);
        expect(typeof lat).toBe('number');

        expect(lng).toBe(-13.21212);
        expect(typeof lng).toBe('number');
    })
    
})