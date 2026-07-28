import {
  adicionarAlunos,
  atualizarAluno,
  retornarAlunoPorId,
} from "../../api/alunorequest";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
function Formulario(props) {
  const id = props.alunoId;
  const nav = useNavigate();
  const [aluno, setAluno] = useState({
    id: undefined,
    cpf: "",
    nome: "",
    data_aniversario: "",
    endereco: "",
  });
  useEffect(() => {
    if (id !== undefined)
      retornarAlunoPorId(id).then((alunoResposta) =>
        setAluno(alunoResposta.data),
      );
  }, []);
  function handleChange(evento) {
    const { name, value } = evento.target;
    setAluno({ ...aluno, [name]: value });
  }
  function matricularAluno(evento) {
    evento.preventDefault();
    if (aluno.id !== undefined) {
      atualizarAluno(aluno).then((resposta) => console.log(resposta));
    } else adicionarAlunos(aluno).then((resposta) => console.log(resposta));
    nav("/alunos");
  }
  return (
    <>
      <form onSubmit={matricularAluno}>
        {aluno.id !== undefined && (
          <input
            type="text"
            name="id"
            id="id"
            onChange={handleChange}
            value={aluno.id}
            readOnly
          />
        )}
        <input
          type="text"
          name="nome"
          id="nomeId"
          onChange={handleChange}
          value={aluno.nome}
        />
        <input
          type="text"
          name="cpf"
          id="cpfId"
          onChange={handleChange}
          value={aluno.cpf}
        />
        <input
          type="date"
          name="data_aniversario"
          id="dataNascimentoId"
          onChange={handleChange}
          value={aluno.data_aniversario || ""}
        />
        <input
          type="text"
          name="endereco"
          id="enderecoId"
          onChange={handleChange}
          value={aluno.endereco}
        />
        <button type="submit">enviar</button>
      </form>
    </>
  );
}
export default Formulario;
