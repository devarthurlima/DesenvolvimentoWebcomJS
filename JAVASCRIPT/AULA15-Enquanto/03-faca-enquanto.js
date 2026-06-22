// while(condicao){}

// do{}while{} -> Executa a condição pelo menos uma vez, mesmo ela sendo falsa.

while(false){
    console.log("Executa while")
}

do{
    console.log("Executa do while")
}while(false)

console.log("")
    
let cont01 = 0
let cont02 = 0

while(cont01<5){
    console.log("While",cont01)
    cont01++
}

do{
    console.log("Do while",cont02)
    cont02++
}while(cont02<5)