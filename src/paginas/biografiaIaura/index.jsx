import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../style/style.css";
import "./biografia.css";

import Navbar from "../../componentes/nav";
import Footer from "../../componentes/folter";

import { biografia } from "../../dados/biografia-iaura";

// Fotos da professora Iaura (hospedadas no site)
const fotos = [
  "https://somosconexaosocial.org/site_img/bio_iaura/bio001.jpg",
  "https://somosconexaosocial.org/site_img/bio_iaura/bio002.jpg",
  "https://somosconexaosocial.org/site_img/bio_iaura/bio003.jpg",
];

// Renderiza cada bloco da biografia (título, parágrafo, lead, imagem ou vídeo)
function renderBloco(bloco, index) {
  switch (bloco.tipo) {
    case "lead":
      return (
        <p key={index} className="bio-lead">
          {bloco.texto}
        </p>
      );
    case "titulo":
      return (
        <h2 key={index} className="bio-secao-titulo">
          {bloco.texto}
        </h2>
      );
    case "imagem":
      return (
        <figure
          key={index}
          className={`bio-fig bio-fig--${bloco.lado || "right"}`}
        >
          <img
            src={bloco.src}
            alt={bloco.alt || "Biografia Iaura Lima"}
            loading="lazy"
          />
        </figure>
      );
    case "video":
      return (
        <aside key={index} className="bio-video-destaque">
          {bloco.rotulo && (
            <span className="bio-video-rotulo">{bloco.rotulo}</span>
          )}
          {bloco.titulo && (
            <h2 className="bio-video-titulo">{bloco.titulo}</h2>
          )}
          <div className="bio-video-wrapper">
            <iframe
              src={bloco.src}
              title={bloco.titulo || "Vídeo - Biografia da professora Iaura Lima"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </aside>
      );
    case "paragrafo":
    default:
      return (
        <p key={index} className="bio-paragrafo">
          {bloco.texto}
        </p>
      );
  }
}

function BiografiaIaura() {
  return (
    <div className="page-container">
      <Navbar />

      <main className="content-wrap">
        <section className="bio-page">
          <div className="bio-inner">
            <h1 className="bio-titulo">Iaura Lima</h1>
            <p className="bio-subtitulo">
              Uma biografia de quem inspira a transformação social
            </p>
            <div className="bio-divider" />

            {/* Carrossel de fotos (hero) */}
            <div className="bio-carrossel">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                loop={true}
                grabCursor={true}
                navigation={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
              >
                {fotos.map((foto, index) => (
                  <SwiperSlide key={index}>
                    <div className="bio-foto-slide">
                      <img
                        src={foto}
                        alt={`Professora Iaura Lima - foto ${index + 1}`}
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Texto da biografia com imagens e vídeo de destaque distribuídos */}
            <article className="bio-texto">
              {biografia.map((bloco, index) => renderBloco(bloco, index))}
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default BiografiaIaura;
