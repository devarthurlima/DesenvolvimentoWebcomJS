const produto = {
  codigo: 1101012,
  nome: "Mamão",
  descricao: "Mamão papaya",
  preco: 5.2,
};

const produtoCopia = {
  codigo: 0,
  nome: "",
  descricao: "",
  preco: 0.0,
};

//console.log(produto['nome'])
//console.log(produto.descricao)

// modificando o produto
produto.nome = "limao";
produto["descricao"] = "siciliano";

produto.etc = "Algum valor aleatório";

// console.log(produto['nome'])
// console.log(produto.descricao)
// console.log(produto.preco)

// console.log(produto)

console.log(produtoCopia)
