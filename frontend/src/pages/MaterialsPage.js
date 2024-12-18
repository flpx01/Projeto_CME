import React, { useState } from "react";
import MaterialList from "../components/MaterialList";
import MaterialForm from "../components/MaterialForm";
import "./MaterialForm.css";


const MaterialsPage = () => {
    const [refresh, setRefresh] = useState(false);

    // Função para atualizar a lista após o cadastro
    const handleMaterialAdded = () => {
        setRefresh(!refresh);
    };

    return (
        <div>
            <h1>Gerenciamento de Materiais</h1>
            <MaterialForm onMaterialAdded={handleMaterialAdded} />
            <MaterialList key={refresh} />
        </div>
    );
};

export default MaterialsPage;

