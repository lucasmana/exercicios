class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`${this.nome} fez um som.`)
    }
}

class Cachorro extends Animal{
    falar(){
        console.log(`${this.nome} latiu: Au Au!`)
    }
}

class Gato extends Animal{
    falar(){
        console.log(`${this.nome} miou: miau miauuuu!`);
        }
        comer(racao){
            this.racao = racao
            return`${this.nome} está comendo ${this.racao}`;
        }
    }
const dog = new Cachorro('Rex');
const cat = new Gato('Paçoca');
cat.falar();

console.log(cat.comer('ração premium'));