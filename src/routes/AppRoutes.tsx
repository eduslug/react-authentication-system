import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashbord from "../pages/Dashboard"
import BasePagina from '../pages/PaginaBase/index';
import PaginaInicial from "../pages/PaginaInicial";

function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>


                <Route path="/" element={<BasePagina />}>
                    <Route index element={<PaginaInicial />} />
                    <Route path="/dashboard" element={<Dashbord />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes