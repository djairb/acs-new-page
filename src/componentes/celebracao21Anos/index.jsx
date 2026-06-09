import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './Celebracao21Anos.css';

const imagens = [
  {
    src: 'https://somosconexaosocial.org/site_img/21/21_1.jpg',
    alt: '21 anos da Associação Conexão Social — imagem 1',
  },
  {
    src: 'https://somosconexaosocial.org/site_img/21/21_2.jpg',
    alt: '21 anos da Associação Conexão Social — imagem 2',
  },
];

const Celebracao21Anos = () => {
  return (
    <section className="celebracao21-section">
      <div className="celebracao21-inner">

        <div className="celebracao21-carrossel">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            grabCursor={true}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="celebracao21-swiper"
          >
            {imagens.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="celebracao21-img-wrapper">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="celebracao21-texto">
          <span className="celebracao21-badge">21 anos</span>
          <h2 className="celebracao21-titulo">
            Vinte e um anos não cabem no calendário
          </h2>
          <p>
            Eles transbordam nas vidas que escolhemos cultivar e nos caminhos que ajudamos a trilhar aqui em Lagoa de Itaenga.
          </p>
          <p>
            Olhar para trás é ver uma estrada bonita feita de mutirão, pé na terra e corações brilhando pelo amanhã. O que nasceu como um sopro de esperança hoje é raiz profunda, fincada no afeto, na cidadania e na força da nossa comunidade.
          </p>
          <p>
            Chegar até aqui é a prova viva de que a transformação social não é um sonho distante, mas algo que floresce quando seguramos a mão uns dos outros de verdade.
          </p>
          <p className="celebracao21-assinatura">
            Obrigado por fazer parte dessa rede. A história é nossa!
          </p>
        </div>

      </div>
    </section>
  );
};

export default Celebracao21Anos;
