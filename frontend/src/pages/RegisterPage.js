import React, { useState } from "react";
import api from "../services/ api";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        role: "tech",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("users/", formData);
            alert("Usuário cadastrado com sucesso!");
            navigate("/login");
        } catch (err) {
            setError("Erro ao cadastrar usuário. Verifique os dados.");
        }
    };

    return (
        <div className="register-page">
            <form onSubmit={handleSubmit}>
                <h2>Cadastro de Usuário</h2>
                {error && <p className="error">{error}</p>}
                <div>
                    <label>Nome de Usuário:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Permissão:</label>
                    <select name="role" value={formData.role} onChange={handleChange}>
                        <option value="tech">Técnico</option>
                        <option value="nurse">Enfermagem</option>
                        <option value="admin">Administrativo</option>
                    </select>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default RegisterPage;
