const numerosAleatorios = [] 
let maiorNumero = 0, menorNumero = 0, soma = 0, media = 0


for(let contador = 0; contador < 10; contador++){
    const numero = Math.round(Math.random()*49)+1

    soma += numero

    maiorNumero = (numero > maiorNumero) ? numero : maiorNumero

    menorNumero = (contador === 0) ? numero : (numero < menorNumero) ? numero : menorNumero

    if(contador === 0){
        menorNumero = numero
    }
    else{
        menorNumero = (numero < menorNumero) ? numero : menorNumero
    }
    
    //menorNumero = (numero < menorNumero) ? numero : menorNumero
    
    numerosAleatorios.push(numero)
}

media = soma/10

console.log(numerosAleatorios)
console.log("Maior número: ", maiorNumero)
console.log("Menor número: ",menorNumero)
console.log("Média: ", media)
