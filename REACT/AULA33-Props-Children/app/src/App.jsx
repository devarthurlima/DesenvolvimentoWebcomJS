import Cabecalho from "./components/Cabecalho";
import Formulario from "./components/Formulário";
import "./App.css";

function App() {
  const titulo = "Universidade do Trabalho Digital";
  const cor = "green";
  const size = "20px";

  return (
    <>
      <Cabecalho heading={titulo} fontcolor={cor} fontsize={size} />
      <Formulario />
    </>
  );
}

export default App;
