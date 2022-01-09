import '@testing-library/jest-dom'
import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp';

describe('Pruebas al componente CounterApp', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })

    test('Debe mostrar a <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe mostrar 100 como valor por defecto en <CounterApp />', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value = {value}/>);
        const valorDef = wrapper.find('h2').text().trim();

        expect(valorDef).toBe('100');
    });

    test('Debe incrementar el contador del botón de +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const valorDef = wrapper.find('h2').text().trim();

        expect(valorDef).toBe('17');
    });

    test('Debe decrementar el contador del botón de -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const valorDef = wrapper.find('h2').text().trim();

        expect(valorDef).toBe('15');
    });

    test('Debe dar por defecto el valor del contador del botón reset', () => {
        const wrapper = shallow(<CounterApp value = {10}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const valorDef = wrapper.find('h2').text().trim();

        expect(valorDef).toBe('10');
    });
});