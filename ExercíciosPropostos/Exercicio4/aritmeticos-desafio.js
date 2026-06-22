// const numero01 = 115, numero02 = 20, numero03 = 5

// O retorno do menor entre 2 números

// const menor = ((numero01 + numero02) - Math.abs(numero01 - numero02)) / 2

// console.log(menor)

// O retorno do maior entre 2 números

// const maior = ((numero01 + numero02) + Math.abs(numero01 - numero02)) / 2

// console.log(maior)

// O retorno do maior entre 3 números(desse modo, o número 03 não pode ser o maior)

// const maior3 = ((numero01 + numero02 + numero03) +  Math.abs(numero01 - numero02) - numero03 ) / 2

// console.log(maior3)

// O retorno do maior entre 3 números(desse modo, o número 03 pode ser o maior)
const numero01 = 15;
const numero02 = 30;
const numero03 = 50;

const maior3 = (((numero01 + numero02 + Math.abs(numero01 - numero02)) / 2) + numero03 + Math.abs(((numero01 + numero02 + Math.abs(numero01 - numero02)) / 2) - numero03)
) / 2;

console.log(maior3)