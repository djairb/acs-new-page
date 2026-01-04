import React, { useState } from 'react';
import logo from "../../img/logoAcs.png";
import MissaoVisaoValores from '../missaoVisaoValores';

const ProjetoComponent = () => {
    const [mostrarInfo, setMostrarInfo] = useState(false);

    const toggleInfo = () => {
        setMostrarInfo(!mostrarInfo);
    };

    return (
        <>
            <div className="projeto-container">
                {/* Polaroid com vídeo */}
                <div className="projeto-foto-container">
                    <iframe
                        className="video-projeto"
                        src="https://www.youtube.com/embed/-eabN_tSE9g?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Vídeo do projeto"
                    >
                    </iframe>
                    <h3>Conheça a Associação Conexão Social</h3>
                </div>

                

                {/* Div com imagem e textos */}
                <div className="info-container">
                    <img
                        src={logo}
                        alt="Logo ACS"
                        className="info-imagem"
                    />
                    <h1>Quem Somos?</h1>
                    <h2>A Associação Conexão Social (ACS) é uma organização da sociedade civil sem fins lucrativos que foi fundada em maio de 2005 no município de Lagoa de Itaenga, na zona da Mata Norte de Pernambuco. A organização possui o objetivo principal de mobilizar a população em busca da garantia dos direitos das pessoas em situação de vulnerabilidade social. Acreditando que a educação é uma poderosa ferramenta para a transformação social, a ACS atende em seus projetos, crianças, adolescentes, jovens, mulheres e idosos.</h2>
                    
                    <button className="saiba-mais-btn" onClick={toggleInfo}>
                        {mostrarInfo ? 'Mostrar Menos' : 'Saiba Mais'}
                    </button>
                </div>
            </div>

            {/* Componente separado que aparece como outra seção */}
            <MissaoVisaoValores mostrar={mostrarInfo} />
        </>
    );
};

export default ProjetoComponent;