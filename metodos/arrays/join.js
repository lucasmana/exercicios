let array = [1, 2, 3, 4, 5,6,7,8,9,10];
let array2 = [11, 12, 13, 14, 15];

// Une os elementos sem nenhum separador
let resultado = array.join(''); 

// Une os elementos com vírgula e espaço
let resultadoVirgula = array.join(', ');

// Une os elementos com hífen
let resultadoHifen = array.join('-');

console.log(resultado);        // Saída: 12345678910
console.log(resultadoVirgula); // Saída: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
console.log(resultadoHifen);   // Saída: 1-2-3-4-5-6-7-8-9-10

const frutas = ['maçã', 'banana', 'laranja'];
const resultado1 = frutas.join('/'); // Une os elementos com vírgula e espaço
console.log(resultado1); // Saída: maçã/banana/laranja
//resumindo,o metodo join é necessario prar juntar strings e numeros em strings tambem. 
//pode se definir o que vai ser posto entre os elmentos da saida. exemplo ()=> 1,2, ou ('-')=> 1-2-3