const alunos = [
  "Beatriz",
  "Paulo",
  "Joana",
  "Flávia",
  "André",
  "Antônio",
  "Marcelo",
  "Helen",
];

for (let atual = 0; atual < alunos.length; atual++) {

  for (let proximo = atual + 1; proximo < alunos.length; proximo++) {

    if (alunos[atual].localeCompare(alunos[proximo])) {

      let temporario = alunos[atual];

      alunos[atual] = alunos[proximo];
      
      alunos[proximo] = temporario
    }
  }
}

console.log(alunos)