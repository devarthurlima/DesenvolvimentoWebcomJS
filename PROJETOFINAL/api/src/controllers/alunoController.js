import {
  listar,
  buscarPorId,
  buscarPorCpf,
  criar,
  atualizar,
  remover,
} from "../services/alunoService.js";

export function listarAlunos(req, res) {
  listar()
    .then((alunos) => {
      res.status(200).json(alunos);
    })
    .catch((erro) => {
      res.status(500).json({ erro: "Erro ao listar alunos" });
    });
}

export function buscarAlunoPorId(req, res) {
  const { id } = req.params;
  buscarPorId(id)
    .then((aluno) => {
      if (!aluno) {
        return res.status(404).json({ erro: "Aluno não encontrado" });
      }
      return res.status(200).json(aluno);
    })
    .catch((erro) => {
      return res.status(500).json({ erro: "Erro ao buscar aluno" });
    });
}

export function criarAluno(req, res) {
  const { cpf, nome, data_aniversario, endereco } = req.body;
  if (!cpf || !nome) {
    return res.status(400).json({ erro: "CPF e nome são obrigatórios" });
  }
  buscarPorCpf(cpf)
    .then((existente) => {
      if (existente) {
        return res.status(409).json({ erro: "CPF já cadastrado" });
      }
      return criar({ cpf, nome, data_aniversario, endereco });
    })
    .then((resultado) => {
      if (resultado && !res.headersSent) {
        return res.status(201).json(resultado);
      }
    })
    .catch((erro) => {
      if (!res.headersSent) {
        return res.status(500).json({ erro: "Erro ao criar aluno: " + erro });
      }
    });
}

export function atualizarAluno(req, res) {
  const { id } = req.params;
  const { cpf, nome, data_aniversario, endereco } = req.body;
  if (!id) {
    return res.status(400).json({ erro: "ID é obrigatório" });
  }
  atualizar(id, { cpf, nome, data_aniversario, endereco })
    .then((resultado) => {
      if (!resultado) {
        return res.status(404).json({ erro: "Aluno não encontrado" });
      }
      return res.status(200).json(resultado);
    })
    .catch((erro) => {
      return res.status(500).json({ erro: "Erro ao atualizar aluno: " + erro });
    });
}

export function removerAluno(req, res) {
  const { id } = req.params;
  remover(id)
    .then((removido) => {
      if (removido) {
        return res.status(204).send();
      }
      return res.status(404).json({ erro: "Aluno não encontrado" });
    })
    .catch((erro) => {
      return res.status(500).json({ erro: "Erro ao remover aluno: " + erro });
    });
}
