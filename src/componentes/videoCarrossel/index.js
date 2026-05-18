import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaPlay } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './VideoCarrossel.css';

import { reportagensDrive } from "../../dados/data-video-reportagens";

const VideoCarrossel = () => {
  // Carrega o iframe só quando o usuário clica no play.
  // Renderizar todos os iframes de uma vez estourava a memória do iOS Safari.
  const [ativos, setAtivos] = useState({});
  const ativar = (id) => setAtivos((prev) => ({ ...prev, [id]: true }));

  return (
    <section className="video-carousel-section">
      <h2 className="video-carousel-title">Nossos Vídeos</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="swiper-videos"
      >
        {reportagensDrive.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="video-card">

              <div className="video-wrapper">
                {ativos[item.id] ? (
                  <iframe
                    src={`${item.videoUrl}${item.videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                    title={item.descricaoVideo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="video-facade"
                    onClick={() => ativar(item.id)}
                    aria-label={`Reproduzir vídeo: ${item.descricaoVideo}`}
                  >
                    <span className="video-facade-play" aria-hidden="true">
                      <FaPlay />
                    </span>
                  </button>
                )}
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
};

export default VideoCarrossel;
