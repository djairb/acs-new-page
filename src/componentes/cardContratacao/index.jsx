import React, { useState, useEffect } from 'react';



function CardContratacao() {
    const [imageSrc, setImageSrc] = useState("https://somosconexaosocial.org/techfest/servidor_mainpage/premio-bg-big.jpg");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setImageSrc("https://somosconexaosocial.org/site_img/public/premio-bg.jpg"); // imagem mobile
            } else {
                setImageSrc("https://somosconexaosocial.org/site_img/public/premio-bg-big.jpg"); // imagem desktop
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

            

            <a href="https://somosconexaosocial.org/premioinovacao/" target="_blank">
                <img src={imageSrc} alt="Techfest 2025" />
            </a>

        </div>
    );
}

export default CardContratacao;