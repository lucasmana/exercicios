const nome = (a) => {
a = ("Lucas manasses Silva de araujo");
return (a);
}
console.log(nome())
////////////////////////////////
const soma = (a,b) =>{
    return a + b;
}
console.log(soma(5,5));

const mult = () => {
    console.log(3*4)
}
mult()

const Lucas = {
    nome: 'lucas Manasses Silva',
    idade: 18,
    profissao:'Programador em Js',
    programacao: function(){
        console.log("Digitando")        
    },

    sauda:function(){
     console.log(`asdfasdfsdaf${this.nome}dsdffsd`)
    }
    
};



const data = ()=> {
    var hoje = new Date();
    var dia = String(hoje.getDate()).padStart(2, '0');
    var mes = String(hoje.getMonth() + 1).padStart(2, '0'); //Janeiro é 0!
    var ano = hoje.getFullYear();
    return (dia + '/' + mes + '/' + ano);
}
console.log(data());

const somar = (a)=> {
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        for(let i = 0; i< array.length; i ++){
            a = a + array[i];            
    }
    return a;
};
console.log(somar(0));

const filtro= ()=> {
const array = [1, 20, 3, 48, 5, 62, 722, 8, 9, 10];
    const novoArray = array.filter((item) => {
        return item > 10;   
    }
);
    return novoArray;
};
   console.log(filtro());

