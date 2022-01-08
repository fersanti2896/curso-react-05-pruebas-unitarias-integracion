/* Primera prueba */

describe('Pruebas en el archivo demo.test.js', () => {
    test('Deben ser iguales los string', () => {
        // 1. Inicializacion
        const mensaje = 'Hola mundo';
    
        // 2. Estimulo
        const mensaje2 = `Hola mundo`;
    
        // 3. Comportamiento
        expect(mensaje).toBe(mensaje2);
    })
});
