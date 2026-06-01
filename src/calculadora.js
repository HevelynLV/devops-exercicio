function somar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os argumentos devem ser números');
  }
  return a + b;
}

function subtrair(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os argumentos devem ser números');
  }
  return a - b;
}

function dividir(a, b) {
  if (b === 0) throw new Error('Divisão por zero não é permitida');
  return a / b;
}

module.exports = { somar, subtrair, dividir };

