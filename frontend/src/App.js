import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MaterialsPage from "./pages/MaterialsPage";
import ProcessesPage from "./pages/ProcessesPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute"; // Importando o componente de rotas protegidas

function App() {
    return (
        <Router>
            <Routes>
                {/* Rota de login - pública */}
                <Route path="/login" element={<LoginPage />} />

                {/* Rotas protegidas */}
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <MaterialsPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/processes"
                    element={
                        <PrivateRoute>
                            <ProcessesPage />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
