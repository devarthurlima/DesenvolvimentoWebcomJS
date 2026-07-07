const sala = [
  "João",
  "Maria",
  "Pedro",
  "Ana",
  "Lucas",
  "João",
  "Carlos",
  "Pedro",
  "Ana",
  "Fernanda",
  "João",
  "Maria",
  "Pedro",
  "Ana",
  "João",
];

const contagem = sala.reduce((chamada, item) => {
  if (!chamada[item]) {
    chamada[item] = 1;
  } else {
    chamada[item]++;
  }
  return chamada;
}, {});

console.log(contagem);
