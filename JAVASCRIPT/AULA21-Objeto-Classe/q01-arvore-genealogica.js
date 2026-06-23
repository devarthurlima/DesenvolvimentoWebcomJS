class Pessoa {
  nome;
  pai;
  mae;

  constructor(nome, pai, mae) {
    this.nome = nome;
    this.pai = pai;
    this.mae = mae;
  }

  equals(pessoa) {
    return (
      typeof pessoa === typeof this &&
      pessoa.nome === this.nome &&
      pessoa.pai === this.pai &&
      pessoa.mae === this.mae
    )};

   fraternidade(pessoa) {
    return (
      typeof pessoa === typeof this &&
      pessoa.nome === this.nome &&
      pessoa.pai === this.pai &&
      pessoa.mae === this.mae
    )}; 

    antecessor(pessoa) {
    return (
      typeof pessoa === typeof this &&
      this.nome === pessoa.pai ||
      this.nome === pessoa.mae
  )};
}


const p1 = new Pessoa("João", "José", "Ana");

const p2 = new Pessoa("João", "José", "Janaina");

const p3 = new Pessoa("Julia", "Henrique", "Ana");

const p4 = new Pessoa("Carlos", "José", "Maria");

const p5 = new Pessoa("Ana", "Mauricio", "Isabele");

//console.log(p1.equals(p2));

// console.log(p1.fraternidade(p3));
// console.log(p1.fraternidade(p4));

console.log(p5.antecessor(p3))