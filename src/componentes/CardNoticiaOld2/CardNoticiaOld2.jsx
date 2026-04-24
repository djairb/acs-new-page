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
        <div className="cardNoticia" onClick={handleClickVisualizar}>
            <div className="cardNoticia__imgWrapper">
                <img
                    src={`${API_IMAGEM_URL}${props.foto_capa}`}
                    alt="Capa da Notícia"
                    className="cardNoticia__img"
                />
                <span className="cardNoticia__badge">Notícia</span>
            </div>
            <div className="cardNoticia__body">
                <h3 className="cardNoticia__titulo">{props.titulo}</h3>
                <span className="cardNoticia__cta">Ler mais →</span>
            </div>
        </div>
    );
}
