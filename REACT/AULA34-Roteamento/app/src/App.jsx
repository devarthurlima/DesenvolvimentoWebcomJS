import Cabecalho from "./components/Cabecalho";
import ContatoPage from "./pages/ContatoPage";
import Clientes from "./pages/Clientes";
import ClienteList from "./pages/ClienteList";
import ClienteInfo from "./pages/ClienteInfo";
import CursoPage from "./pages/CursoPage";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const titulo = "Universidade do Trabalho Digital";
  const cor = "green";
  const size = "20px";

  return (
    <>
      <Cabecalho heading={titulo} fontcolor={cor} fontsize={size} />
      <Routes>
        <Route index element={<CursoPage />} />
        <Route path="/teste" element={<CursoPage />} />
        <Route path="/clientes" element={<Clientes />}>
          <Route path="list" element={<ClienteList />} />
          <Route path=":id" element={<ClienteInfo />} />
        </Route>
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
