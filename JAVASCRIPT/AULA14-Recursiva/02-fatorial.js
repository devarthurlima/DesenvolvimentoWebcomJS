function fatorial(numero){
    if(numero===1)
        return 1
    else
        return numero * fatorial(numero-1)
}

// 5 * (5-1=4) * (4-1=3) * (3-1=2) * (2-1=1) * 1 
console.log(fatorial(2))