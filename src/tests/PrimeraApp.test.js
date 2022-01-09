import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import PrimeraApp from '../PrimeraApp'


describe('Pruebas en Componenten PrimeraApp', () => {
    /* Prueba con jest-dom */
    // test('Debe mostrar "Hola, soy Fernando"', () => {
    //     const saludo = 'Hola, soy Fernando';
    //     const { getByText } = render(<PrimeraApp saludo = {saludo}/>);

    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    /* Pruebas con Enzyme*/
    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, soy Fernando';
        const wrapper = shallow(<PrimeraApp saludo = {saludo}/>);

        expect(wrapper).toMatchSnapshot();
    })
        
});