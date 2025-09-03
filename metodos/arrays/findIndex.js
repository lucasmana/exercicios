let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let novoArray = array.findIndex(x => x > 5);
console.log(novoArray);
/* Ele retorna o index do numero depois que atender a condiçao.
    no exemplo acima, ele retorna o cinco. o Index da condição (no caso 5)
    Se nenhum elemento atender a condição, ele retorna undefined.
    Esse método é útil quando você precisa encontrar um único elemento em um array que atenda a uma condição específica.
*/