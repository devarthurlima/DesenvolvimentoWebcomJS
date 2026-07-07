// reduce -> utilizado para reduzir um array a um único valor, aplicando uma função acumuladora a cada elemento do array.

const sala = [7,10,5,10,7,7,8,1,6,10,8,7,4,10]

const total = sala.reduce((soma,nota) => soma += nota,0)

const media = total / sala.length

console.log(`A média da sala é: ${media.toFixed(1)}`)