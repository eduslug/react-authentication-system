import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashbord from "../pages/Dashboard"
import BasePagina from '../pages/PaginaBase/index';
import PaginaInicial from "../pages/PaginaInicial";
import PaginaFormulario from "../pages/PaginaBaseFormulario/index";
import Login from '../pages/Login/index';
import Cadastro from "../pages/Cadastro";
import RotaPrivada from "../utils/RotaPrivada";

function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePagina />}>
                    <Route index element={<PaginaInicial />} />
                    <Route element={<RotaPrivada />}>
                        <Route path="/dashboard" element={<Dashbord />} />
                    </Route>
                </Route>
                <Route path="/" element={<PaginaFormulario />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                </Route>
            </Routes >
        </BrowserRouter >
    )
}

export default AppRoutes