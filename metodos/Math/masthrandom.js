let num = Math.round(Math.random() *10);
console.log(num);

function aleatorio(min, max){

    return Math.ceil(Math.random() * (max - min + 1)) + min;
}
console.log(aleatorio(6000000,900000000));


function aleatorioExcluir(min, max, excluir) {
    let numero;
    do {
        numero = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (excluir.includes(numero));
    return numero;
}

// Excluindo o 5
console.log(aleatorioExcluir(6000000, 900000000, [5]));