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
      key: 1,
      imgPq: "https://somosconexaosocial.org/site_img/public/pq-wpp.jpg",
      imgBig: "https://somosconexaosocial.org/site_img/public/big-wpp.jpg",
      link: "https://drive.google.com/drive/folders/1-rIECktSQ_MsEix4pLceAx5Kb6nHvwsN?usp=sharing",
    },
    {
      key: 2,
      imgPq: "https://somosconexaosocial.org/site_img/public/cuidador-pq.jpg",
      imgBig: "https://somosconexaosocial.org/site_img/public/cuidador-big.jpg",
      link: "https://forms.gle/vAH3do8uM2VGcyqw9",
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
