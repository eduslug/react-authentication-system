import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashbord from "../pages/Dashboard"
import BasePagina from '../pages/PaginaBase/index';
import PaginaInicial from "../pages/PaginaInicial";
import PaginaFormulario from "../pages/PaginaBaseFormulario/index";
import Login from '../pages/Login/index';

function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePagina />}>
                    <Route index element={<PaginaInicial />} />
                    <Route path="/dashboard" element={<Dashbord />} />
                </Route>
                <Route path="/" element={<PaginaFormulario />}>
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes