import Aluno from "./Aluno.js";
import Pessoa from "./Pessoa.js";

const p = new Pessoa(
  "123.456.789-10",
  "Manoel Eduardo Pereira",
  "1974-02-15",
  "manoeleduardo@gmail.com",
);

const a = new Aluno(
  "987.654.321-99",
  "Elza Analu da Rocha",
  "2007-06-09",
  "elzadarocha@gmail.com",
  "18180102",
  "JavaScript",
);

p.nome = "Bernado Nogueira Feitosa";

console.log(p.toString());
console.log("")
console.log(a.toString());
