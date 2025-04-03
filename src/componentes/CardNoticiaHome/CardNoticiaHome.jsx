import React from "react";
import '../../style/style.css';
import { useNavigate } from 'react-router-dom';
import { API_IMAGEM_URL } from "../../infra/apiConfig";

export default function CardNoticiaHome(props) {
    const navigate = useNavigate();

    const handleClickVisualizar = () => {
        navigate(`/noticias/${props.slug}`);
    }

    return (
        <div className="containerCardNoticiaHome" onClick={handleClickVisualizar}>
            <div className="cardImagemContainer">
                <img
                    src={`${API_IMAGEM_URL}${props.foto_capa}`}
                    alt="Capa da Notícia"
                    className="cardImagem"
                />
                <div className="cardOverlay">
                    <h1 className="tituloCardNoticia">{props.titulo}</h1>
                </div>
            </div>
        </div>
    );
}