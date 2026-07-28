import Formulario from "../../Componentes/Formulario";
import { useParams } from "react-router";
function AlunoInfo() {
  const { id } = useParams();
  return (
    <>
      <Formulario alunoId={id} />
    </>
  );
}
export default AlunoInfo;
