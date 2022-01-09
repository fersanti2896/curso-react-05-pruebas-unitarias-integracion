import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import PrimeraApp from '../PrimeraApp'

describe('Pruebas en Componenten PrimeraApp', () => {
    test('Debe mostrar "Hola, soy Fernando"', () => {
        const saludo = 'Hola, soy Fernando';
        const { getByText } = render(<PrimeraApp saludo = {saludo}/>);

        expect(getByText(saludo)).toBeInTheDocument();
    })
    
})