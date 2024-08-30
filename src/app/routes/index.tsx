
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/pagina-inicial" element={<Dashboard></Dashboard>}></Route>
                <Route path="/entrar" element={<Login></Login>}></Route>
                <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            </Routes>
        </BrowserRouter>
    );
};