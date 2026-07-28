import { useNavigate } from "react-router";
import Tabela from "../../Componentes/Tabela";
function AlunoTabela() {
  const nav = useNavigate();
  const redirecionarAlunoCadastro = () => {
    nav("adicionar");
  };
  return (
    <>
      <button onClick={redirecionarAlunoCadastro}>+ aluno</button>
      <br />
      <br />
      <Tabela />
    </>
  );
}
export default AlunoTabela;
