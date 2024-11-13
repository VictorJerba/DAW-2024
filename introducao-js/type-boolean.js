const value1 = true;
const value2 = false;

console.log(value1 === value2);

// Thrusty / Falsy --> Variáveis vazias ou com valor 0, se submeter
// a um teste lógico, se tornaram um tipo boolean (thrusty/falsy)

// teste logico
if (value1) {
    console.log('Verdadeiro');
} else {
    console.log ('Falso');
}

// teste logico
if (value1) {
    console.log('Verdadeiro');
} 

// o de cima vira
if (value1) console.log('Verdadeiro');

// Operador ternário
const resultado = value1 ? 'Verdadeiro' : 'Falso';