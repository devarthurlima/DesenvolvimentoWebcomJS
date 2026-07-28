import Cabecalho from "./componentes/Cabecalho";
import { Routes, Route } from "react-router";
import "./App.css";
import Inicio from "./paginas/Inicio";
import Alunos from "./paginas/Alunos";
import AlunosTabela from "./paginas/AlunosTabela";
import AlunoCadastro from "./paginas/AlunoCadastro";
import AlunoInfo from "./paginas/AlunoInfo";
import Cursos from "./paginas/Cursos";

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
        <Route path="/cursos" element={<Cursos />} />
      </Routes>
    </>
  );
}

export default App;
