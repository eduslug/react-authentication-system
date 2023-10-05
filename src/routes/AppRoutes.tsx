import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashbord from "../pages/Dashboard"
import BasePagina from '../pages/PaginaBase/index';

function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<BasePagina />} >
                    <Route path={'/dashboard'} element={<Dashbord />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes