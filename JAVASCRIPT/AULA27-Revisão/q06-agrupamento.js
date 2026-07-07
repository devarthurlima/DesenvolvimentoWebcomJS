const produtos = [
  { nome: "geladeira", tipo: "eletro" },
  { nome: "abacaxi", tipo: "fruta" },
  { nome: "arroz", tipo: "cereal" },
  { nome: "leite", tipo: "laticinio" },
  { nome: "uva", tipo: "fruta" },
  { nome: "micro-ondas", tipo: "eletro" },
  { nome: "shampoo", tipo: "higiene" },
  { nome: "sabonete", tipo: "higiene" },
  { nome: "acerola", tipo: "fruta" },
];

/*
const inventario = produtos.reduce((levantamento, produto) => {
  
  if (!levantamento[produto.tipo]) {
    levantamento[produto.tipo] = [produto.nome];
  } else {
    levantamento[produto.tipo].push(produto.nome);
  }
  return levantamento;
}, {});
*/

const inventario = produtos.reduce((levantamento, produto) => {
  
  const {nome,tipo} = produto

  if (!levantamento[tipo]) {
    levantamento[tipo] = [nome];
  } else {
    levantamento[tipo].push(nome);
  }
  return levantamento;
}, {});

console.log(inventario);
