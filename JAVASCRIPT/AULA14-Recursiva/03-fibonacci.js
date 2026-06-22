// Função Recursiva -> Ela chama a si mesma até alcançar um ponto de parada.
// 0 1 1 2 3 5 8 13 21 34

function fib(a){
    if(a<2)
        return 1
    return fib(a - 1) + fib(a - 2)
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
