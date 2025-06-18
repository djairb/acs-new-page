import React, { useState, useEffect } from 'react';



function CardContratacao() {
    const [imageSrc, setImageSrc] = useState("https://somosconexaosocial.org/techfest/servidor_mainpage/ti-grande.jpg");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setImageSrc("https://somosconexaosocial.org/techfest/servidor_mainpage/ti-pq.jpg"); // imagem mobile
            } else {
                setImageSrc("https://somosconexaosocial.org/techfest/servidor_mainpage/ti-grande.jpg"); // imagem desktop
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

            

            <a href="https://drive.google.com/file/d/1f2MKC6YmIK6MZOmC3iosQ4s_wWxGJCOa/view?usp=sharing" target="_blank">
                <img src={imageSrc} alt="Techfest 2025" />
            </a>

        </div>
    );
}

export default CardContratacao;