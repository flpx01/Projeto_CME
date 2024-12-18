import React from "react";
import ProcessList from "../components/ProcessList";
import ReportDownload from "../components/ReportDownload";

const ProcessesPage = () => {
    return (
        <div>
            <h1>Rastreabilidade de Processos</h1>
            <ProcessList />
            <ReportDownload />
        </div>
    );
};

export default ProcessesPage;
