import Cabecalho from "./Componentes/Cabecalho";
import { Routes, Route } from "react-router";
import "./App.css";
import Inicio from "./páginas/Inicio";
import Alunos from "./páginas/Alunos";
import AlunosTabela from "./páginas/AlunosTabela";
import AlunoCadastro from "./páginas/AlunoCadastro";
import AlunoInfo from "./páginas/AlunoInfo";
function App() {
  return (
    <>
      <Cabecalho />
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="/alunos" element={<Alunos />}>
          <Route index element={<AlunosTabela />} />
          <Route path=":id" element={<AlunoInfo />} />
          <Route path="adicionar" element={<AlunoCadastro />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
