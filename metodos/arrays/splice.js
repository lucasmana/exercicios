let array = [1,2,3,4,5,6,7,8,9,10];
let novoArray = array.splice(2, 3, 11, 12, 13);
console.log(array);
//Esse metodo altera o array original removendo elementos e/ou adicionando novos elementos.
//No exemplo acima, ele remove 3 elementos a partir do indice 2 e adiciona 11, 12 e 13 nesse local.

let array1 = [1,2,3,4,5,6,7,8,9,10];
let novoArray1 = array1.splice(2,1,4);
console.log(array1);
//No exemplo acima, ele remove 1 elemento a partir do indice 2 e adiciona o valor 4 nesse local.