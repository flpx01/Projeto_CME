import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MaterialsPage from "./pages/MaterialsPage";
import ProcessesPage from "./pages/ProcessesPage";
import LoginPage from "./pages/LoginPage";// Importando o componente de rotas protegidas
import RegisterPage from "./pages/RegisterPage";


function App() {
    return (
        <Router>
            <Routes>
                {/* Rota de login - pública */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="processes" element={<MaterialsPage />} />
                <Route path="processes" element={<ProcessesPage />} />   
            
            </Routes>
        </Router>
    );
}

export default App;
