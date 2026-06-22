let populacaoA = 5_000_000, populacaoB = 7_000_000, contadorAnos = 0

for(;true;){
    populacaoA = populacaoA + (populacaoA * 0.03)
    populacaoB = populacaoB + (populacaoB * 0.02)

    contadorAnos++

    if(populacaoA > populacaoB){
        break
    }
}

console.log('anos :',contadorAnos)
console.log('a :',populacaoA)
console.log('b :',populacaoB)