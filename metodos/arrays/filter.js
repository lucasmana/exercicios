let array = [1,2,3,4,5,6,7,8,9,10];
let novoArray = array.filter(num =>num > 5);
console.log(novoArray);
//Esse metodo cria um novo array com todos os elementos que passam no teste(condiçao) implementado pela função fornecida.
//No exemplo acima, ele cria um novo array com os números maiores que 5 do array original.

let array1 = ['Lucas', 'joao,','Matheus', 'Manassés', 'Josineide'];
let novoArray1 = array1.filter(user => user.length < 6);
console.log(novoArray1);
