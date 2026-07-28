import Aluno from "../models/cliente.js";

export async function listar() {
  return Aluno.findAll({ order: [["id", "ASC"]] });
}

export async function buscarPorId(id) {
  return Aluno.findByPk(id);
}

export async function buscarPorCpf(cpf) {
  return Aluno.findOne({ where: { cpf } });
}

export async function criar(dados) {
  return Aluno.create({
    cpf: dados.cpf,
    nome: dados.nome,
    data_aniversario: dados.data_aniversario ?? null,
    endereco: dados.endereco ?? null,
  });
}

export async function atualizar(id, dados) {
  const aluno = await buscarPorId(id);

  if (!aluno) return null;

  await aluno.update({
    ...(dados.cpf !== undefined && { cpf: dados.cpf }),
    ...(dados.nome !== undefined && { nome: dados.nome }),
    ...(dados.data_aniversario !== undefined && {
      data_aniversario: dados.data_aniversario,
    }),
    ...(dados.endereco !== undefined && { endereco: dados.endereco }),
  });
  return aluno;
}

export async function remover(id) {
  const aluno = await buscarPorId(id);
  if (!aluno) return false;
  await aluno.destroy({ where: { id: aluno.id } });
  return true;
}