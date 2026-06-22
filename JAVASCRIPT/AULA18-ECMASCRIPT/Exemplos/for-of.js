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

//for-of (para listas)
for (let aluno of alunos) {
  console.log(aluno);
}

//for
for (let indice = 0; indice < alunos.length; indice++) {
  console.log(alunos);
  break
}

//for-in (para objetos)
for(let indice in alunos){
    console.log(alunos[indice])
}