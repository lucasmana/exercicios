/* O Incluedes() é  um ótimo metodo para verificar se um valor 
existe dentro de um array, seja ele em 'Numbers ou strings.
*/
const frutas = ["maçã", "banana", "laranja"];

console.log(frutas.includes("banana")); // true
console.log(frutas.includes("uva"));    // false
console.log(frutas.includes("maçã", 1)); // false (começa a buscar a partir do índice 1) se 0, o resultado é true, pois maça está na posicao 0

// Exemplo com string
const frase = "Eu gosto de JavaScript";

console.log(frase.includes("Java"));    // true
console.log(frase.includes("Python"));  // false

//Case-sensitive: diferencia maiúsculas e minúsculas.
"Lucas".includes("lucas"); // false

// Verificar se um número está em um array
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.includes(3)); // true

//Verificar se um caractere está em uma palavra
const palavra = "programador";
console.log(palavra.includes("g")); // true

//✅ Conclusão:
//includes() quando quiser saber se um valor existe em um array ou string, de forma rápida e legível.
