let array=[1,2,3,4,5,6,7,8,9,10];
let novoArray = array.map(x => x * 2);
console.log(novoArray);
//esse array mapeia e cria um novo array a partir dos elementos fo array origial e faz uma opereção que o usuario desejar.
//array original. No exemplo acima, ele multiplica cada elemento do array por 2 e retorna um novo array.
//
//exemplos de map()
const nomes1 = ["ana", "joão", "maria"];
const nomesMaiusculos = nomes1.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos); // ["ANA", "JOÃO", "MARIA"]


const produtos = ["Arroz", "Feijão", "Macarrão"];
const listaFormatada = produtos.map(produto => `Produto: ${produto}`);
console.log(listaFormatada);
// ["Produto: Arroz", "Produto: Feijão", "Produto: Macarrão"]


const usuarios = [
  { nome: "Lucas", idade: 18 },
  { nome: "Maria", idade: 25 }
];
const nomes = usuarios.map(user => user.nome);
console.log(nomes); // ["Lucas", "Maria"]


const frutas = ["Maçã", "Banana", "Laranja"];
const itensHTML = frutas.map(fruta => `<li>${fruta}</li>`);
console.log(itensHTML);
// ["<li>Maçã</li>", "<li>Banana</li>", "<li>Laranja</li>"]
