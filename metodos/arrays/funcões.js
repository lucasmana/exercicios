function soma (a,b){    
    return a + b;
}
    console.log(soma(10,5));

    function subtracao (a,b){
    return a - b;
}
console.log(subtracao(10,5));

function multiplicacao(a,b){
return a * b;
}
console.log(multiplicacao(10,5));

function nome(nome){
    return `O nome é ${nome}`;
};
console.log(nome("Lucas"));


function maiornum(array){
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;      

}

    
        function contar(Texto){
        const contagem = {};    

        for(let letra of Texto.toLowerCase()){
            if(letra.match(/[a-z]/)){
                contagem[letra] = (contagem[letra] || 0)+ 1;
            }
        }
        return contagem;
        }
    const resultado = contar("Lucas Manassés Silva de Araújo");
    console.log(resultado);
       