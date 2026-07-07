/*
function formatador(tag) {
  return function (texto) {
    return `<${tag}>${texto}</${tag}>`;
  };
}
*/

const formatador = tag => texto => `<${tag}>${texto}</${tag}>`

const paragrafo = formatador('p')
const negrito = formatador("strong");

console.log(paragrafo('Esse texto será renderizado' + negrito('em negrito')))
