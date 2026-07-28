import "./Cabecalho.css";
import { Link } from "react-router";

function Cabecalho() {
  return (
    <>
      <header className="cabecalho">
        <h1>UNIVERSIDADE DO TRABALHO DIGITAL</h1>
        <ol>
          <li>
            <Link to="/">inicio</Link>
          </li>
          <li>
            <Link to="/alunos">alunos</Link>
          </li>
          <li>
            <Link to="/cursos">cursos</Link>
          </li>
        </ol>
      </header>
    </>
  );
}
export default Cabecalho;
