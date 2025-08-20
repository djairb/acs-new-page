import React from "react";
import '../../style/style.css';
import { API_IMAGEM_URL } from "../../infra/apiConfig";
import { useNavigate } from "react-router-dom";

export default function CardNoticiaOld2(props) {

    const navigate = useNavigate()

    const handleClickVisualizar = () => {

        window.open(`#/noticias/${props.slug}`, '_blank'); // abre em nova guia
        
        
    };

    return (
        <div className="containerCardNoticiaEdicao containerCardNoticia2" onClick={handleClickVisualizar}>
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
