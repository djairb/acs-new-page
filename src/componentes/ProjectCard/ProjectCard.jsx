import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectCard = ({ data }) => {
  const [expandido, setExpandido] = useState(false);

  // Função para rolar a tela até o card quando abrir (Opcional, mas melhora a UX)
  const toggleExpandir = (e) => {
    setExpandido(!expandido);
    // Pequeno delay para dar tempo do CSS animar
    if (!expandido) {
        setTimeout(() => {
            e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
  };

  return (
    <div className={`card-projeto ${expandido ? 'expandido' : ''}`}>
      
      {/* SLIDER */}
      <div className="card-carousel-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="mySwiper"
        >
          {data.imagens.map((imgUrl, index) => (
            <SwiperSlide key={index}>
              <img src={imgUrl} alt={data.titulo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CORPO DO TEXTO */}
      <div className="card-body">
        <div className="card-header-content">
          <h3>{data.titulo}</h3>
          {data.logo && (
            <img src={data.logo} alt="Logo" className="project-logo" />
          )}
        </div>
        
        <div className="resumo-container">
          {/* Se expandido, esconde o texto curto para não ficar repetitivo, ou mantém se preferir */}
          {!expandido && <p className="texto-curto">{data.descricaoCurta}</p>}
          
          <button 
            className="btn-leia-mais"
            onClick={toggleExpandir}
          >
            {expandido ? 'Fechar Detalhes' : 'Mais Detalhes'}
          </button>
        </div>

        {/* TEXTO LONGO */}
        {expandido && (
          <div className="texto-completo">
             {/* Destaque do Título ou Intro no modo expandido */}
             <p><strong>{data.descricaoCurta}</strong></p> 
             <br/>
             <p>{data.descricaoLonga}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;