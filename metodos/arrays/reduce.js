let array = [1,2,3,4,5,6,7,8,9,10];
let novoArray = array.reduce((acc, num) => acc + num );
console.log(novoArray);
//Esse metodo executa uma função reducer (que você fornece) em cada elemento do array, resultando em um único valor.
//No exemplo acima, ele soma todos os números do array e retorna o total.

const palavras = ["Olá", "mundo", "!"];
const frase = palavras.reduce((acc, palavra) => acc + " " + palavra);
console.log(frase); // "Olá mundo !"

const compras = [
  { produto: "Livro", preco: 30 },
  { produto: "Caderno", preco: 10 },
  { produto: "Caneta", preco: 5 }
];
const total = compras.reduce((acc, item) => acc + item.preco, 0);
console.log(total); // 45
