import React, { useState } from "react";
import api from "../services/ api";

const MaterialForm = ({ onMaterialAdded }) => {
    const [formData, setFormData] = useState({
        name: "",
        material_type: "",
        expiration_date: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Envia os dados do formulário para o backend
            const response = await api.post("materials/", formData);
            alert("Material cadastrado com sucesso!");
            setFormData({ name: "", material_type: "", expiration_date: "" });
            onMaterialAdded(); // Atualiza a lista de materiais
        } catch (error) {
            console.error("Erro ao cadastrar material:", error);
            alert("Erro ao cadastrar material.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Cadastrar Material</h2>
            <div>
                <label>Nome do Material:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Tipo do Material:</label>
                <input
                    type="text"
                    name="material_type"
                    value={formData.material_type}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Data de Validade:</label>
                <input
                    type="date"
                    name="expiration_date"
                    value={formData.expiration_date}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default MaterialForm;
