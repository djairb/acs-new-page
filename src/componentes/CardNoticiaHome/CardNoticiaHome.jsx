import React from "react";
import '../../style/style.css';
import { useNavigate } from 'react-router-dom';

export default function CardNoticiaHome(props) {
    const navigate = useNavigate();

    const handleClickVisualizar = () => {
        navigate(`/noticias/${props.slug}`);
    };

    const arrayBufferToDataURL = (arrayBuffer, mimeType = 'image/jpeg') => {
        const bytes = new Uint8Array(arrayBuffer);
        const binaryString = Array.from(bytes).map(byte => String.fromCharCode(byte)).join('');
        const base64String = window.btoa(binaryString);
        return `data:${mimeType};base64,${base64String}`;
    };

    const dataFoto = arrayBufferToDataURL(new Uint8Array(props.foto_capa.data));

    return (
        <div className="containerCardNoticiaHome" onClick={handleClickVisualizar}>
            <div className="cardImagemContainer">
                <img
                    src={dataFoto}
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