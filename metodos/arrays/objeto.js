const nome ={
    nome: "João",
    idade:15,
    altura: 1.75,
    peso:"75m Kg",
    cidade:"Recife",
    comida: function () { ("arroz e feijão") },

        completo: function(){ 
            return alert(`${this.nome} tem ${this.idade} anos, mora em ${this.cidade} e gosta de comer ${nome.comida()}`);
        } 
    
};

console.log(nome.completo());



