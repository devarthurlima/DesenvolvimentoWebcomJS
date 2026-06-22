const corrida = ['Beatriz','Paulo','Joana','Flávia','André','Antônio','Marcelo','Helen']

const [Primeiro,Segundo,Terceiro,...Participação] = corrida
//No Array[] a desestruturação segue a ordem.

console.log('Ouro:',Primeiro)
console.log('Prata:',Segundo)
console.log('Bronze:',Terceiro)
console.log('Prêmio por participação:',Participação)