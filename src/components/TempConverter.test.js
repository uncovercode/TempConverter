import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import TempConverter from './TempConverter';

configure({ adapter: new Adapter() });

// Grupo de testes Celsius
describe('Verifica se os métodos de conversão para temperatura Celsius funcionam corretamente', () => {

    const wrapper = shallow(<TempConverter />);

    test('20°C igual é igual a 68°F', () => {
        expect(wrapper.instance().celsiusToFahrenheit(20) === 68.00).toBeTruthy();
    });
    test('32°C não é maior que 400°K', () => {
        expect(wrapper.instance().celsiusToKelvin(32) > 400).toBeFalsy();
    });
    test('59,3°C é igual a 138,75°F', () => {
        expect(wrapper.instance().celsiusToFahrenheit(59.3)).toEqual(138.75);
    });
})

// Grupo de testes Fahrenheit
describe('Verifica se os métodos de conversão para temperatura Fahrenheit funcionam corretamente', () => {
 
    const wrapper = shallow(<TempConverter />);

    test('28,988°F não é igual a -2°C', () => {
        expect(wrapper.instance().fahrenheitToCelsius(28.988)).not.toEqual(-2);
    });
    test('A conversão de "30,22"°F para °C retorna um valor não numérico', () => {
        expect(wrapper.instance().fahrenheitToCelsius('30,22')).toBeNaN();
    });
    test('20°F é menor que 300°K', () => {
        expect(wrapper.instance().fahrenheitToKelvin(20)).toBeLessThan(300);
    });

})

// Grupo de testes Kelvin
describe('Verifica se os métodos de conversão para temperatura Kelvin funcionam corretamente', () => {

    const wrapper = shallow(<TempConverter />);

    test('800,3°K é próximo de 980,90°F', () => {
        expect(wrapper.instance().kelvinToFahrenheit(800.3)).toBeCloseTo(980.90, 1);
    });
})