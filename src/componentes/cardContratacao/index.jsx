import React, { useState, useEffect } from 'react';



function CardContratacao() {
    const [imageSrc, setImageSrc] = useState("https://somosconexaosocial.org/techfest/servidor_mainpage/ti-grande.jpg");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setImageSrc("https://somosconexaosocial.org/site_img/public/pq-wpp.jpg"); // imagem mobile
            } else {
                setImageSrc("https://somosconexaosocial.org/site_img/public/big-wpp.jpg"); // imagem desktop
            }
        };

        // Adiciona o event listener e executa a verificação inicial
        window.addEventListener('resize', handleResize);
        handleResize();

        // Limpa o event listener ao desmontar o componente
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="inscricaoCard">

            

            <a href="https://drive.google.com/drive/folders/1-rIECktSQ_MsEix4pLceAx5Kb6nHvwsN?usp=sharing" target="_blank">
                <img src={imageSrc} alt="Techfest 2025" />
            </a>

        </div>
    );
}

export default CardContratacao;