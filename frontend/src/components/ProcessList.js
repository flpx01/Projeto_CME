import React, { useEffect, useState } from "react";
import api from "../services/ api";
import "./ProcessList.css";

const ProcessList = () => {
    const [processes, setProcesses] = useState([]);

    useEffect(() => {
        // Busca os processos no backend
        api.get("processes/")
            .then((response) => setProcesses(response.data))
            .catch((error) => console.error("Erro ao buscar processos:", error));
    }, []);

    return (
        <div className="process-list">
            <h2>Etapas de Rastreabilidade</h2>
            {processes.length > 0 ? (
                processes.map((process) => (
                    <div key={process.id} className="process-item">
                        <div>
                            <strong>Material:</strong> {process.material_name}
                        </div>
                        <div>
                            <strong>Etapa:</strong> {process.stage}
                        </div>
                        <div>
                            <strong>Data:</strong>{" "}
                            {new Date(process.completed_at).toLocaleString()}
                        </div>
                        <div>
                            <strong>Falha:</strong> {process.has_failure ? "Sim" : "Não"}
                        </div>
                    </div>
                ))
            ) : (
                <p>Nenhuma etapa encontrada.</p>
            )}
        </div>
    );
};

export default ProcessList;
