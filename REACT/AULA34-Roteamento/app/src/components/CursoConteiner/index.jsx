import './CursoConteiner.css'

function CursoConteiner(props){
    return (
        <>
            <div className='container'>
                {props.children}
            </div>
        </>
    )
}

export default CursoConteiner;