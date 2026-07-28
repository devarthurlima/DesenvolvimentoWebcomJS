import { useParams } from "react-router-dom";

function ClienteInfo() {
  const { id } = useParams;

  console.log(id);

  return;
  <>
    <h3>Página de informação de clientes {id}</h3>;
  </>;
}

export default ClienteInfo;
