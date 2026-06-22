import ordemCrescente from "./01-Intro.js"
import raiz from "./q01-raiz-quadrada.js"
import numerosMega from "./q02-mega-sena.js"


let euSouUmaVariavel = 10

function semRetorno(){ //Quando eu preciso mudar o valor de uma variável
    euSouUmaVariavel = 101
    console.log('Eu sou uma função sem retorno')
}

function comRetorno(){ 
    console.log("Eu sou uma função com retorno")
    return 37
}

const resultado = semRetorno()
console.log(resultado)

const resultado2 = comRetorno()
console.log(resultado2)

semRetorno()
console.log(euSouUmaVariavel)

// Chamando as funções externas
ordemCrescente(26,11,41)

console.log(raiz(49))

numerosMega()