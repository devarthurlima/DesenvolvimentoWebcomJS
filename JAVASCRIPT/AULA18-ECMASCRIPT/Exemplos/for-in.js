const professor = { nome: "Osvaldo", idade: 39, email: "osvaldo@gmail.com" };

// for(let prop of professor){
//     console.log(prop)
// }

for(let prop in professor){
    console.log(prop+':'+professor[prop])
}