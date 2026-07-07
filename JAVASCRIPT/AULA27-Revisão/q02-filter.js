// filter => utilizado para filtrar elementos de um array, criando um novo array com os elementos que atendem a uma condição específica.

const ehprimo = (numero) => {
  let divisor = 1;
  let numeroDivisores = 0;

  while (divisor <= numero) {
    if (numero % divisor === 0) {
      numeroDivisores++;
    }
    divisor++;
  }
    return numeroDivisores === 2;
};

console.log(ehprimo(7));

const lista = [6,7,8,10,12,20,23,45,47,51,55,60,67,70]

const primos = lista.filter(numero => ehprimo(numero))

console.log(primos)