import { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL_DOACOES } from "../../infra/apiConfig";


export default function Login() {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_BASE_URL_DOACOES}/login`,
        { senha }
      );

      const { token } = response.data;

      // Salva o token
      localStorage.setItem("token", token);

      navigate("/listar-doacoes");

    } catch (err) {
      setErro("Senha inválida.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login Doacoes</h2>

        <input
          type="password"
          placeholder="Digite a senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        {erro && <span className="erro">{erro}</span>}

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
