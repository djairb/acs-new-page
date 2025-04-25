import React, { useState, useEffect } from 'react';



function CardTechfest() {
    const [imageSrc, setImageSrc] = useState("https://somosconexaosocial.org/techfest/servidor_mainpage/techfest.jpg");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setImageSrc("https://somosconexaosocial.org/techfest/servidor_mainpage/techfest_pq.jpg"); // imagem mobile
            } else {
                setImageSrc("https://somosconexaosocial.org/techfest/servidor_mainpage/techfest.jpg"); // imagem desktop
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

            <a href="https://somosconexaosocial.org/techfest/" target="_blank">
                <img src={imageSrc} alt="Techfest 2025" />
            </a>

        </div>
    );
}

export default CardTechfest;