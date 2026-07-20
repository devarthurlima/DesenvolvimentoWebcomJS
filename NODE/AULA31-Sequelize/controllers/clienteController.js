import {
  listar,
  buscarPorId,
  buscarPorCpf,
  criar,
  atualizar,
  remover,
} from "../services/clienteService.js";

export function listarClientes(req, res) {
  listar()
    .then((clientes) => {
      res.status(200).json(clientes);
    })
    .catch((erro) => {
      res.status(500).json({ erro: "Erro ao listar clientes " + erro });
    });
}

export function buscarClientePeloId(req, res) {
  const { id } = req.params;

  buscarPorId(id)
    .then((cliente) => {
      res.status(200).json(cliente);
    })
    .catch((erro) => {
      res.status(500).json({ erro: "Erro ao buscar cliente " + erro });
    });
}

export function deletarClientePeloId(req, res) {
  const { id } = req.params;

  remover(id)
    .then((condicao) => {
      if (condicao)
        res.status(204).json({ message: "Cliente deletado com sucesso" });
    })
    .catch((erro) => res.status(404).json({ erro: "Erro ao deletar cliente " + erro }));
}

export function criarClientes(req, res) {
  const { cpf, nome, email, data_aniversario, endereco } = req.body;

  if (!cpf || !nome || !email) {
    return res.status(400).json({ erro: "CPF, nome e email são obrigatórios" });
  }

  buscarPorCpf(cpf)
    .then((existente) => {
      if (existente) {
        return res.status(409).json({ erro: "CPF já cadastrado" });
      }
      return criar({ cpf, nome, email, data_aniversario, endereco });
    })
    .then((resultado) => {
      // só chega aqui se criar retornou o cliente (não se já respondeu 409)
      if (resultado && !res.headerSent) {
        return res.status(201).json(resultado);
      }
    })
    .catch((erro) => {
      if (!res.headersSent) {
        return res.status(500).json({ erro: "Erro ao criar cliente 1" + erro });
      }
    });

  console.log(cpf, nome, email, data_aniversario, endereco);
}
