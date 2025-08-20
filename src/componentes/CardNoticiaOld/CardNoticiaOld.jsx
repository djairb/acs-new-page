import React from "react";
import '../../style/style.css';
import { useNavigate } from 'react-router-dom';
import { API_IMAGEM_URL } from "../../infra/apiConfig";



export default function CardNoticiaOld(props) {
    const navigate = useNavigate();

    const handleClickVisualizar = () => {
        sessionStorage.setItem('noticiasScrollPosition', window.scrollY);
        navigate(`/noticias/${props.slug}`);
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


