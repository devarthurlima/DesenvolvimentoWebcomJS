import Cliente from "../models/clienteModel.js";

export async function listar() {
  return Cliente.findAll({ order: [["id", "ASC"]] });
}

export async function buscarPorId(id) {
  return Cliente.findByPk(id);
}

export async function buscarPorCpf(cpf) {
  return Cliente.findOne({ where: { cpf } });
}

export async function criar(dados) {
  return Cliente.create({
    cpf: dados.cpf,
    nome: dados.nome,
    email: dados.email,
    data_aniversario: dados.data_aniversario ?? null,
    endereco: dados.endereco ?? null,
  });
}

export async function atualizar(id, dados) {
  const cliente = await this.buscarPorId(id);
  if (!cliente) return null;
  await cliente.update({
    ...(dados.cpf !== undefined && { cpf: dados.cpf }),
    ...(dados.nome !== undefined && { nome: dados.nome }),
    ...(dados.email !== undefined && { email: dados.email }),
    ...(dados.data_aniversario !== undefined && {
      data_aniversario: dados.data_aniversario,
    }),
    ...(dados.endereco !== undefined && { endereco: dados.endereco }),
  });
  return cliente;
}

export async function remover(id) {
  const cliente = await buscarPorId(id);
  if (!cliente) return false;
  await cliente.destroy();
  return true;
}
