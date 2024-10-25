import React, { useState, useEffect } from 'react';
import cardInscricaoDesktop from "../../img/cardInscricao/seletivo.jpg";
import cardInscricaoMobile from "../../img/cardInscricao/seletivo-pq.jpg";


function InscricaoCard() {
    const [imageSrc, setImageSrc] = useState(cardInscricaoDesktop);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setImageSrc(cardInscricaoMobile); // imagem mobile
            } else {
                setImageSrc(cardInscricaoDesktop); // imagem desktop
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
            <img src={imageSrc} alt="Inscrição" />
        </div>
    );
}

export default InscricaoCard;
