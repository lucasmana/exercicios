    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let novoArray = array.slice(2, 10);
    console.log(novoArray);
    /*esse metodo copia o array e faz um novo array com os valores solicitados. no Exemplo acima
    array.slice(2,10) significa que ele vai copiar do indice 2 ao 10, mas o 10 não entra no novo array.
    O array original permanece inalterado.*/