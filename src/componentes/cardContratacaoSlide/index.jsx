import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "lightbox.js-react/dist/index.css";

function CardContratacaoSlide() {
  const [isMobile, setIsMobile] = useState(false);

  const files = [
    {
      key: 0,
      descricao:'passaporte digital abrace uma causa',
      imgPq: "https://somosconexaosocial.org/site_img/carrossel-link/passaporte-pq.jpg",
      imgBig: "https://somosconexaosocial.org/site_img/carrossel-link/passaporte-big.jpg",
      link: "https://doeseuir.abraceumacausa.com.br/projeto/?projectId=1080",
    },
    {
      key: 1,
      descricao:'oportunizar comunidade abrace uma causa',
      imgPq: "https://somosconexaosocial.org/site_img/carrossel-link/comunidade-pq.jpg",
      imgBig: "https://somosconexaosocial.org/site_img/carrossel-link/comunidade-big.jpg",
      link: "https://doeseuir.abraceumacausa.com.br/projeto/?projectId=1283",
    },
    {
      key: 2,
      descricao:'premio inovacao e tecnologia',
      imgPq: "https://somosconexaosocial.org/site_img/carrossel-link/premio-pq.jpg",
      imgBig: "https://somosconexaosocial.org/site_img/carrossel-link/premio-big.jpg",
      link: "https://somosconexaosocial.org/premioinovacao/",
    }
  ];

  // Detecta se está em mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={5}
      loop={true}
      grabCursor={true}
      autoplay={true}
      navigation
      style={{
        "--swiper-pagination-color": "#f08528",
        "--swiper-navigation-color": "#f08528",
      }}
    >
      {files.map((imagem) => (
        <SwiperSlide key={imagem.key}>
          <div className="cardCarrosselContratacao">
            
              {/* cada imagem precisa estar como filho do SlideshowLightbox */}
              <img
                src={isMobile ? imagem.imgPq : imagem.imgBig}
                alt="Imagem de contratação"
                className="imagemHomeContratacao"
                data-lightboxjs="true" // importante para funcionar no lightbox
                onClick={() => window.open(imagem.link, "_blank")}
              />
            
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardContratacaoSlide;
