import { Outlet } from "react-router-dom"

function Clientes(){

    return (
        <>
        <h3>Página geral dos clientes</h3>
        <Outlet />
        </>
    )
}

export default Clientes;