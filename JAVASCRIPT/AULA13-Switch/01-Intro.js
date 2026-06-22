console.log('1 - Novo jogo')
console.log('2 - Carregar jogo')
console.log('3 - Opções')
console.log('4 - Bonús')

const opcao = 1

switch(opcao){
    case 1:
        console.log('Começando a jornada...')
        break
    case 2:
        console.log('Escolha um slot de gravação')
        break
    case 3:
        console.log('Escolha o nível de dificuldade: Facíl, Médio, Difícil')
        break
    case 4:
        console.log('Original Sound Track')
        break
    default:
        console.log('Opção inválida')
}