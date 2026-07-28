import './CursoCard.css'

function CursoCard({titulo, foto, duracao, descricao}){
    
    return (
    <>
    <div className="card">
        <div className="cardphoto">
            <img src={foto} alt={titulo} />
        </div>
        <h4>{titulo}</h4>
        <h6 className='cardduration'>
            {duracao} horas
        </h6>
        <p className='carddesc'>
            {descricao}
        </p>
    </div>
    </>
    )
}

export default CursoCard