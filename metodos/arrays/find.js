let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let novoArray = array.find(x => x > 5);
console.log(novoArray);

/* Ele retorna o primerio numero depois que atender a condiçao.
    no exemplo acima, ele retorna o primeiro numero maior que 5.
    Se nenhum elemento atender a condição, ele retorna undefined.
    Esse método é útil quando você precisa encontrar um único elemento em um array que atenda a uma condição específica.
*/