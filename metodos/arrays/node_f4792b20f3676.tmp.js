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
Lucas.programacao();
Lucas.sauda();

var resultado =0; 
const notas = (nota1,nota2,nota3,)=>{
    b = nota1 + nota2 + nota3;
    resultado = b/3
   return b; 
}
 notas(10,10,10);
 console.log(resultado);

 laço = 0
 while(laço< 10){
    console.log("contando" + laço)

 }