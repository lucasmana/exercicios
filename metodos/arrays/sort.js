let array = [1, 4, 3, 42, 5, 90, 7, 8, 9, 10];
let novoArray = array.sort((a,b) => a - b);
console.log(novoArray);
//Esse metodo ordena os elementos do array de acordo com a função de comparação fornecida.
//No exemplo acima, ele ordena os números do menor para o maior. Se você quiser
//ordenar do maior para o menor, basta inverter a ordem na função de comparação (b - a).

