const valorEmprestimo = Math.round(Math.random() * 9)+1 * 1000

const numeroParcelas = Math.round(Math.random() * 5)+5

const salario = 3000

const juros = valorEmprestimo * 0.05 * numeroParcelas

const montante = valorEmprestimo + juros

const valorParcela = montante / numeroParcelas

if(valorParcela <= salario * 0.3){
    console.log('Empréstimo aprovado')
}
else{
    console.log('Empréstimo negado')
}

console.log('Valor do empréstimo: ' + valorEmprestimo)
console.log('Quantidade de parcelas: ' +numeroParcelas)
console.log('Valor final  : '+montante.toFixed(2) + ' Juros: ' + juros.toFixed(2))
console.log('Valor da parcela: ' + valorParcela.toFixed(2))
console.log('Salário: ' + salario)
