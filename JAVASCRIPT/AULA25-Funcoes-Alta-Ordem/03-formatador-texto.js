/*function formatador(formatador){
    return function(texto){
        return formatador(texto)
    }
}
*/

const formatador = formatador => texto => formatador(texto)

const caixaAlto = (txt) => txt.toUpperCase()
const inverterTexto = txt => txt.split('').reverse().join('')

const texto = 'universidade do trabalho digital'

const palavra = "paralelepipedo"

console.log(caixaAlto(texto))
console.log(texto)

console.log(inverterTexto(palavra))