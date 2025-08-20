import React from "react";
import '../../style/style.css';
import { API_IMAGEM_URL } from "../../infra/apiConfig";

export default function CardNoticiaOld(props) {

    const handleClickVisualizar = () => {
        sessionStorage.setItem('noticiasScrollPosition', window.scrollY);
        window.open(`#/noticias/${props.slug}`, '_blank'); // abre em nova guia
    };

    return (
        <div className="containerCardNoticiaEdicao" onClick={handleClickVisualizar}>
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
