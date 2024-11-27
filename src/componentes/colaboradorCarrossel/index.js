import React, { useEffect, useState } from "react";
import CardVideo from "../cardVideo";
import { reportagensDrive } from "../../dados/data-video-reportagens";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { parceirosList } from "../../dados/data-colaboradores";
import CardColaborador from '../../componentes/cardColaborador/CardColaborador';

const ColaboradorCarrossel = () => {

  const [numeroSlide, alterarNumeroSlide] = useState(3);


  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            alterarNumeroSlide(1); // imagem mobile
        } else {
          alterarNumeroSlide(3); // imagem desktop
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
      <h1 className="h1SectionTitle">Nossos Colaboradores</h1>

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
        {parceirosList.map((colaborador, index) => (
          <SwiperSlide key={index}>

              <CardColaborador

                key={index}
                foto={colaborador.imagem}
                nome={colaborador.nome}
                funcao={colaborador.funcao}

              />

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ColaboradorCarrossel;
