import React, { useEffect, useState } from "react";
import api from "../services/ api";
import "./MaterialList.css"; // Importando o estilo

const MaterialList = () => {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        // Busca os materiais no backend
        api.get("materials/")
            .then((response) => setMaterials(response.data))
            .catch((error) => console.error("Erro ao buscar materiais:", error));
    }, []);

    return (
        <div className="material-list">
            <h2>Lista de Materiais</h2>
            {materials.length > 0 ? (
                materials.map((material) => (
                    <div key={material.id} className="material-item">
                        <div>
                            <strong>Nome:</strong> <span>{material.name}</span>
                        </div>
                        <div>
                            <strong>Tipo:</strong> <span>{material.material_type}</span>
                        </div>
                        <div>
                            <strong>Validade:</strong> <span>{material.expiration_date}</span>
                        </div>
                    </div>
                ))
            ) : (
                <p>Nenhum material encontrado.</p>
            )}
        </div>
    );
};

export default MaterialList;
