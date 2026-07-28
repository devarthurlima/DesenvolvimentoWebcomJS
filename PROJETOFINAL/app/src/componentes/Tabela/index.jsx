import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { retornarAlunos, removerAluno } from "../../api/alunorequest";
import "./Tabela.css";

function Tabela() {
  const nav = useNavigate();
  const [alunos, setAlunos] = useState([]);
  const carregarAlunos = () => {
    retornarAlunos().then((alunosResposta) => {
      setAlunos(alunosResposta.data);
    });
  };
  const removerAlunoPeloId = (id) => {
    removerAluno(id).then((resposta) => {
      console.log(resposta);
      carregarAlunos();
    });
  };
  const formataDataBr = (data) => data?.split("-").reverse().join("/");
  useEffect(() => {
    carregarAlunos();
    console.log(alunos);
  }, []);
  return (
    <div className="tabela-container">
      <table className="tabela-alunos">
        <thead>
          <tr>
            <th>id</th>
            <th>cpf</th>
            <th>nome</th>
            <th>data nascimento</th>
            <th>endereço</th>
            <th colSpan={2}>ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.cpf}</td>
              <td>{aluno.nome}</td>
              <td>{formataDataBr(aluno.data_aniversario)}</td>
              <td>{aluno.endereco}</td>
              <td>
                <button
                  onClick={() => {
                    nav(`/alunos/${aluno.id}`);
                  }}
                >
                  editar
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    removerAlunoPeloId(aluno.id);
                  }}
                >
                  apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Tabela;
