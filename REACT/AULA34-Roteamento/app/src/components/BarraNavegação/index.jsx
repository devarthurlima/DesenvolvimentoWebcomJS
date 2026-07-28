import { Link } from "react-router-dom";
import "./BarraNavegacao.css";

function BarraNavegacao() {
  return (
    <>
      <ol className="barra-navegacao">
        <li>
          <Link>Início</Link>
        </li>
        <li>
          <Link to="clientes">Clientes</Link>
        </li>
        <li>
          <Link to="contato">Fale Conosco</Link>
        </li>
      </ol>
    </>
  );
}

export default BarraNavegacao;
