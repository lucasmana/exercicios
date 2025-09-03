const numero ='10';
const resultado = parseInt(numero);
console.log(resultado);

const numero1 = '10';
const numeroConvertido = Number.parseInt(numero);
console.log(numeroConvertido); // Output: 10 (number)

const numero2 = '10';
const numeroConvertido2 = +numero;
console.log(numeroConvertido); // Output: 10 (number)

///////////////////////////////////////////////////////////////

const numero5 = '10.5';
numero.parseFloat(); // ❌ Isso não funciona
console.log(numero); // Ainda mostra '10.5' (string)

const numero6 = '10.5';
const numeroConvertido6= Number.parseFloat(numero);
console.log(numeroConvertido); // Output: 10.5 (number)
console.log(typeof numeroConvertido); // Output: number

const numero7= '10.5';
const numeroConvertido7 = parseFloat(numero);
console.log(numeroConvertido); // Output: 10.5 (number)

const numero8 = '10.5';
const numeroConvertido8 = +numero;
console.log(numeroConvertido); // Output: 10.5 (number)