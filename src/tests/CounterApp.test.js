import '@testing-library/jest-dom'
import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp';

describe('Pruebas al componente CounterApp', () => {
    test('Debe mostrar a <CounterApp /> correctamente', () => {
        const wrapper = shallow(<CounterApp />);
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar 100 como valor por defecto en <CounterApp />', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value = {value}/>);
        const valorDef = wrapper.find('h2').text().trim();

        expect(valorDef).toBe('100');
    })
});