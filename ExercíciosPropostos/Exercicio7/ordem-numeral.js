const numeros = [2, 31, 9, 10, 6, 20, 1, 42];

// numeros.sort((a, b) => a - b);
// console.log(numeros);

let atual = 0;
let temporario = 0;

for (let atual = 0; atual < numeros.length; atual++) {
  for (let proximo = 0; proximo < numeros.length; proximo++) {
    if (numeros[atual] < numeros[proximo]) {
      let temporario = numeros[atual];

      numeros[atual] = numeros[proximo];

      numeros[proximo] = temporario;
    }
  }
}

console.log(numeros);
