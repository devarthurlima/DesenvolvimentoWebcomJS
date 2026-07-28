import Aluno from "../models/Aluno.js";
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
  const Aluno = await buscarPorId(id);
  if (!Aluno) return null;
  await Aluno.update({
    ...(dados.cpf !== undefined && { cpf: dados.cpf }),
    ...(dados.nome !== undefined && { nome: dados.nome }),
    ...(dados.data_aniversario !== undefined && {
      data_aniversario: dados.data_aniversario,
    }),
    ...(dados.endereco !== undefined && { endereco: dados.endereco }),
  });
  return Aluno;
}
export async function remover(id) {
  const Aluno = await buscarPorId(id);
  if (!Aluno) return false;
  await Aluno.destroy({ where: { id: Aluno.id } });
  return true;
}
