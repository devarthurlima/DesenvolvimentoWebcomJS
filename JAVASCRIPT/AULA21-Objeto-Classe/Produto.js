class Produto {
  codigo;
  nome;
  descricao;
  preco;

  constructor(codigo, nome, descricao, preco) {
    ((this.codigo = codigo),
      (this.nome = nome),
      (this.descricao = descricao),
      (this.preco = preco));
  }

  //metodo
  desconto() {
    return this.preco - this.preco * 0.5;
  }
}

const p = new Produto("102102", "Acerola", "Fruta citríca vermelha", 3.8);

console.log(p);
