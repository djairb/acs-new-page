import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectCard = ({ data }) => {
  // "expandido" controla o layout (card em tela cheia); "conteudoVisivel" controla
  // o fade do texto. Separar os dois deixa a transição suave em duas etapas:
  // ao abrir, o card expande e só então o texto aparece; ao fechar, o texto some
  // primeiro e só depois o card retrai.
  const [expandido, setExpandido] = useState(false);
  const [conteudoVisivel, setConteudoVisivel] = useState(false);
  const cardRef = useRef(null);

  const toggleExpandir = () => {
    if (!expandido) {
      setExpandido(true);
      // Deixa o layout começar a expandir antes de revelar o texto.
      setTimeout(() => setConteudoVisivel(true), 220);
      // Rola até o card depois que a expansão acomodou.
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 480);
    } else {
      // Some com o texto primeiro; só então retrai o card.
      setConteudoVisivel(false);
      setTimeout(() => setExpandido(false), 260);
    }
  };

  return (
    <div ref={cardRef} className={`card-projeto ${expandido ? 'expandido' : ''}`}>
      
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
          <div className={`texto-completo ${conteudoVisivel ? 'visivel' : ''}`}>
             {/* Destaque do Título ou Intro no modo expandido */}
             <p className="texto-destaque"><strong>{data.descricaoCurta}</strong></p>

             {(Array.isArray(data.descricaoLonga) ? data.descricaoLonga : [data.descricaoLonga]).map((paragrafo, index) => (
               <p key={index} className="texto-paragrafo">{paragrafo}</p>
             ))}

             {data.areas && data.areas.length > 0 && (
               <div className="card-secao">
                 <h4 className="card-secao-titulo">{data.areasTitulo || 'Áreas de Atuação'}</h4>
                 <ul className="card-areas-lista">
                   {data.areas.map((area, index) => (
                     <li key={index}>
                       <strong>{area.nome}</strong>
                       {area.descricao ? ` — ${area.descricao}` : ''}
                     </li>
                   ))}
                 </ul>
               </div>
             )}

             {data.impacto && (
               <div className="card-secao">
                 <h4 className="card-secao-titulo">Impacto Social</h4>
                 <p className="texto-paragrafo">{data.impacto}</p>
               </div>
             )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;