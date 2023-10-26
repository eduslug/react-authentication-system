import { Navigate, Outlet } from "react-router-dom"
import autenticaStores from "../stores/auth.stores"

const RotaPrivada = () => {
    const { altenticado } = autenticaStores
    return (
        altenticado ? <Outlet /> : <Navigate to='/login' />
    )
}

export default RotaPrivada;