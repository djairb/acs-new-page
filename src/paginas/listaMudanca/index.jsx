import { useEffect, useState } from "react";
import axios from "axios";
import "./doacoes.css";
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL_DOACOES } from "../../infra/apiConfig";

export default function ListarDoacoes() {
  const [doacoes, setDoacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
        
        alert("sem login efetuado");
        navigate("/");
        return;
    }

    buscarDoacoes();
    // eslint-disable-next-line
  }, []);

  const buscarDoacoes = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL_DOACOES}/doacoes`, 

        
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDoacoes(response.data);
    } catch (err) {
      setErro("Erro ao carregar doações.");
    } finally {
      setLoading(false);
    }
  };

  const excluirDoacao = async (id) => {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir esta doação?"
    );

    if (!confirmar) return;

    try {
      await axios.delete(
        `${API_BASE_URL_DOACOES}/doacoes/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Remove do estado sem precisar buscar tudo de novo
      setDoacoes(doacoes.filter((d) => d.id !== id));
    } catch (err) {
      alert("Erro ao excluir doação.");
    }
  };

  if (loading) {
    return <p className="loading">Carregando doações...</p>;
  }

  return (
    <div className="doacoes-container">
      <h2>Doações recebidas</h2>

      {erro && <p className="erro">{erro}</p>}

      {doacoes.length === 0 ? (
        <p>Nenhuma doação registrada.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Valor</th>
              <th>Data</th>
              <th>Cidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {doacoes.map((d) => (
              <tr key={d.id}>
                <td>{d.nome}</td>
                <td>{d.email}</td>
                <td>R$ {Number(d.valorDoado).toFixed(2)}</td>
                <td>
                  {new Date(d.dataDoacao).toLocaleDateString("pt-BR")}
                </td>
                <td>{d.cidade}</td>
                <td>
                  <button
                    className="btn-excluir"
                    onClick={() => excluirDoacao(d.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
