import React from "react";
import api from "../services/ api";
import "./ReportDownload.css";

const ReportDownload = () => {
    const downloadReport = async (type) => {
        try {
            const response = await api.get(`reports/${type}/`, {
                responseType: "blob", // Importante para arquivos
            });

            // Criar um link para download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute(
                "download",
                `process_report.${type === "pdf" ? "pdf" : "xlsx"}`
            );
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Erro ao baixar o relatório:", error);
            alert("Não foi possível baixar o relatório.");
        }
    };

    return (
        <div className="report-download">
            <h2>Baixar Relatórios</h2>
            <button onClick={() => downloadReport("pdf")}>Baixar PDF</button>
            <button onClick={() => downloadReport("xlsx")}>Baixar XLSX</button>
        </div>
    );
};

export default ReportDownload;
