import './Cabecalho.css'
import BarraNavegacao from '../BarraNavegação';
import TituloPrincipal from '../TituloPrincipal';

function Cabecalho() {
    return (
    <>
    <header className="cabecalho">
        <TituloPrincipal />
        <BarraNavegacao />
    </header>
    </>
    )
}

export default Cabecalho;