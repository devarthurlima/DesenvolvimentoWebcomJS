function somatorio(numero){
    if(numero===0)
        return 0
    else
        return numero + somatorio(numero-1)
}

// 5 + (5-1=4) + (4-1=3) + (3-1=2) + (2-1=1) + (1-1=0) + 0 
console.log(somatorio(5))