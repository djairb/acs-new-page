import React from "react";
import '../../style/style.css';
import { useNavigate } from 'react-router-dom';

export default function CardNoticiaOld(props) {

    const navigate = useNavigate();


    const handleClickVisualizar = () => {

        //SLUG
        navigate(`/noticias/${props.slug}`)
        // id_noticia, slug, exibir_na_home, 

    }

    const date = new Date(props.data_noticia);

    const formattedDate = date.toLocaleDateString();

    const arrayBufferToDataURL = (arrayBuffer, mimeType = 'image/jpeg') => {
        const bytes = new Uint8Array(arrayBuffer);
        const binaryString = Array.from(bytes).map(byte => String.fromCharCode(byte)).join('');
        const base64String = window.btoa(binaryString);
        return `data:${mimeType};base64,${base64String}`;
    };

    const dataFoto = arrayBufferToDataURL(new Uint8Array(props.foto_capa.data))
    
    return (        

        <>
            <div className={`containerCardNoticiaEdicao`}>

                <img src={dataFoto} />

                <h1 className="tituloCardNoticia">{props.titulo}</h1>

                <button
                    onClick={handleClickVisualizar}
                >
                    Visualizar Notícia
                </button>


            </div>

        </>


    )




}