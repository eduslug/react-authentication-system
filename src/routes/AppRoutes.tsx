import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashbord from "../pages/Dashboard"

function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                 <Route path={'/dashboard'} element={<Dashbord/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes