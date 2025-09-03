//Verifica se é Not a Number
const verificar = '10';
const resultado = isNaN(verificar)
console.log(resultado)

const verificar1 = 'sadfd';
const resultado1 = isNaN(verificar1)
console.log(resultado1)
// verificou se não era um numero e a saída deu false, porque '10' é um numero, mesmo em aspas.
//se o verificar fosse um uma string, ele resultaria verdadeiro, pois verifica se é NOT A NUMBER, ou seja, se não é um numero 

// '20'--> false 
//  30 --> false
// 'sdfsdf' --> true
//  sdfsdf  --> Error: Info: Start process (10:33:54)
