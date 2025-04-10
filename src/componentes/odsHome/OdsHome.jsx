import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const importAll = (r) => r.keys().map(r);

const odsOur = importAll(require.context("../../img/ods-icons", false, /\.(png|jpe?g|svg)$/));

const OdsHome = () => {

  const [numeroSlide, alterarNumeroSlide] = useState(3);


  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            alterarNumeroSlide(1); // imagem mobile
        } else {
          alterarNumeroSlide(4); // imagem desktop
        }
    };

    // Adiciona o event listener e executa a verificação inicial
    window.addEventListener('resize', handleResize);
    handleResize();

    // Limpa o event listener ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize);
}, []);



  return (
    <div className="divReportagens">
      <h1 className="h1SectionTitle">Objetivos de Desenvolvimento Sustentável - ACS</h1>

      <Swiper
        slidesPerView={numeroSlide} // Ajuste este valor para o número desejado de vídeos por vez
        spaceBetween={1} // Espaçamento entre os slides (em pixels)
        style={{
          "--swiper-pagination-color": "#f08528",
          "--swiper-navigation-color": "#f08528",
        }}
        grabCursor={true}
        loop={true}
        autoplay={true}
        
        navigation
        className="swiperMaster"
      >
        {odsOur.map((imagem, index) => (
          <SwiperSlide key={index}>

            <img
            
              src={imagem}
              className="imageOds"
            
            
            />


          </SwiperSlide>
        ))}
      </Swiper>

      <p className="pOds">Os Objetivos de Desenvolvimento Sustentável (ODS) são um apelo global à ação para enfrentar os principais desafios sociais, ambientais e econômicos do nosso tempo. A ACS, como organização da sociedade civil comprometida com essa agenda, atua diretamente na promoção de diversos ODS, com foco especial na erradicação da pobreza, saúde e bem-estar, educação de qualidade, igualdade de gênero, redução das desigualdades e cidades e comunidades sustentáveis. Por meio de projetos e iniciativas locais, buscamos transformar realidades e contribuir para um futuro mais justo, inclusivo e sustentável.</p>
    </div>
  );
}

export default OdsHome;
