import './Cabecalho.css'
import BarraNavegacao from '../BarraNavegação';

function Cabecalho({heading, fontcolor, fontsize}) {
    return (
    <>
    <header className="cabecalho">
        <h1 style={{'color':fontcolor, 'font-size': fontsize}}>{heading}</h1>
        <BarraNavegacao />
    </header>
    </>
    )
}

export default Cabecalho;