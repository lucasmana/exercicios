let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = array.some(x => x > 6);


if (resultado === true) {
    console.log("Existe pelo menos um número maior que 6 no array.");
}