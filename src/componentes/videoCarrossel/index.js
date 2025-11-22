import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Importando os módulos necessários do Swiper v8+
import { Navigation, Pagination } from 'swiper/modules';

// Importando o CSS do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importando SEU CSS novo
import './VideoCarrossel.css';

import { reportagensDrive } from "../../dados/data-video-reportagens";

const VideoCarrossel = () => {

  return (
    <section className="video-carousel-section">
      <h2 className="video-carousel-title">Nossos Vídeos</h2>

      <Swiper
        // Módulos ativos
        modules={[Navigation, Pagination]}
        
        // Espaçamento entre slides
        spaceBetween={20}
        
        // Configurações de Loop
        loop={true}
        grabCursor={true}
        
        // Paginação (Bolinhas) e Setas
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        
        // BREAKPOINTS: A mágica da responsividade acontece aqui!
        breakpoints={{
          // Telas pequenas (Celular): 1 slide
          320: {
            slidesPerView: 1,
          },
          // Tablets: 2 slides
          768: {
            slidesPerView: 2,
          },
          // Desktop: 3 slides
          1024: {
            slidesPerView: 3,
          },
        }}
        
        className="swiper-videos"
      >
        {reportagensDrive.map((item) => (
          <SwiperSlide key={item.id}>
            
            <div className="video-card">
              
              {/* Wrapper para manter o vídeo em 16:9 sempre */}
              <div className="video-wrapper">
                <iframe 
                  src={item.videoUrl} 
                  title={item.descricaoVideo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>

              <div className="video-content">
                <h3>{item.descricaoVideo}</h3>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default VideoCarrossel;