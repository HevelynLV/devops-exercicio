const { somar, subtrair, dividir } = require('../src/calculadora');

describe('Calculadora', () => {

  test('soma dois números positivos', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('lança erro se argumento não for número', () => {
    expect(() => somar('a', 2)).toThrow('Os argumentos devem ser números');
  });

  test('subtrai dois números', () => {
    expect(subtrair(10, 4)).toBe(6);
  });

  test('lança erro ao dividir por zero', () => {
    expect(() => dividir(5, 0)).toThrow('Divisão por zero não é permitida');
  });

});