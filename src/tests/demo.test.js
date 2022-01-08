/* Primera prueba */
test('Esta es mi primera prueba, debe ser true', () => {
    const isActive = true;

    if(isActive) {
        throw new Error('No está activo');
    }
})
