 let arrayAninhado = [1, 2, [3, 4], 5, [6, 7]]; 
//O array aninhado só tem 4 podições,
//  pois o ainhado, seja qual for a quantidade de numeros que recebe
//  contará apenas como uma posição. 
let achatado = arrayAninhado.flat();
console.log(arrayAninhado[4]);
// [1, 2, 3, 4, 5, 6, 7]
