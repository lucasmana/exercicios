class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade= idade;
    }


apresentar(){
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
  }
}
const pessoas1 = new Pessoa('Lucas',19);
console.log(pessoas1.apresentar());

