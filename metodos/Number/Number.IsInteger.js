console.log(Number.isInteger(10));     // true
console.log(Number.isInteger(0));      // true
console.log(Number.isInteger(-15));    // true
console.log(Number.isInteger(999999)); // true

console.log(Number.isInteger(10.5));   // false (decimal)
console.log(Number.isInteger(0.1));    // false (decimal)
console.log(Number.isInteger(Math.PI)); // false (3.14159...)
console.log(Number.isInteger(NaN));    // false (não é número)
console.log(Number.isInteger(Infinity)); // false (infinito)
console.log(Number.isInteger('10'));   // false (string)
console.log(Number.isInteger(true));   // false (boolean)
console.log(Number.isInteger(null));   // false (null)

// Não existe isInteger() global - isso causaria erro
// console.log(isInteger(10)); // ReferenceError: isInteger is not defined

// O correto é usar Number.isInteger()
console.log(Number.isInteger(10)); // true

const numero = '10.5';

// parseInt() converte para inteiro (remove decimais)
console.log(parseInt(numero)); // 10 (number)

// Number.isInteger() apenas verifica o tipo
console.log(Number.isInteger(numero)); // false (é string)
console.log(Number.isInteger(10.0));  // true (10.0 é considerado inteiro)

function validarIdade(idade) {
    if (Number.isInteger(idade) && idade > 0) {
        return `Idade válida: ${idade} anos`;
    } else {
        return 'Idade deve ser um número inteiro positivo';
    }
}

console.log(validarIdade(25));    // "Idade válida: 25 anos"
console.log(validarIdade(25.5));  // "Idade deve ser um número inteiro positivo"
console.log(validarIdade('25'));  // "Idade deve ser um número inteiro positivo"

const numeros = [1, 2, 3.5, 4, 5.2, 6];

const inteiros = numeros.filter(num => Number.isInteger(num));
console.log(inteiros); // [1, 2, 4, 6]