import Pessoa from "./Pessoa.js";

export default class Cliente extends Pessoa {
  #cadastro;
  #tipoCadastro;
  #veiculos = [];

  constructor(
    cadastro,
    id,
    cpf,
    nome,
    dataDeNascimento,
    tipoCadastro,
    veiculo,
  ) {
    super(id, cpf, nome, dataDeNascimento);
    this.#cadastro = cadastro;
    this.#tipoCadastro = tipoCadastro;
    this.#veiculos.push(veiculo);
  }

  get cadastro() {
    return this.#cadastro;
  }

  set cadastro(cadastro) {
    this.#cadastro = cadastro;
  }

  get tipoCadastro() {
    return this.#cadastro;
  }

  set tipoCadastro(tipoCadastro) {
    this.#cadastro = tipoCadastro;
  }

  get veiculos() {
    const resposta = [];

    for (let carro of this.#veiculos) {
      const { placa, modelo } = carro;

      resposta.push({ placa: placa, modelo: modelo });
    }
    return resposta;
  }

  adicionarVeiculo(veiculo) {
    this.#veiculos.push(veiculo);
  }

  removerVeiculo(veiculo) {
    for (let indice in this.#veiculos) {
      if (veiculo.placa === this.#veiculos[indice].placa) {
        this.#veiculos.splice(indice, 1);
      }
    }
  }
}
