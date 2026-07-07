// map -> utilizado para a transformação de dados, ele cria uma nova array clonando a estrutura da original, deixando a original intacta.

const numeros = [2, 3, 4, 5, 6, 7, 8];

const triplo = numeros.map((numero) => numero * 3);
console.log(triplo);

const quadrado = numeros.map((numero) => numero ** 2);
console.log(quadrado);

//Programação Funcional
numeros
  .map((numero, indice) => [indice, numero ** 2])
  .forEach((resposta) => console.log(resposta));
