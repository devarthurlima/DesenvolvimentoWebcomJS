const alunos = [
  "Armando",
  "Lucrécia",
  "Louis",
  "Jenifer",
  "Leopoldo",
  "Amara",
  "Ricardo",
];

// for (let atual = 0; atual < alunos.length; atual++) {
  
//     for (let proximo = 0; proximo < alunos.length; proximo++) {
    
//     if(alunos[atual].localeCompare(alunos[proximo]) < 0){
//         let temporario = alunos[atual]
    
//         alunos[atual] = alunos[proximo]

//         alunos[proximo] = temporario
//     }
//   }
// }

alunos.sort((a,b) => a.localeCompare(b))

console.log(alunos)