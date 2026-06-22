let numero = Math.round(Math.random()*10)+30, divisor = 1, numeroDivisores = 0

while(divisor <= numero){
    if(numero % divisor === 0){
        numeroDivisores++
    }
    divisor++
}

if(numeroDivisores===2){
    console.log("O número "+numero+" é primo")
}
else{
    console.log("O número "+ numero + " não é primo")
}