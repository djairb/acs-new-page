import React, { useEffect, useState } from 'react';
import '../../style/style.css';
import Navbar from '../nav';
import Footer from '../folter';

import Axios from 'axios';


import { API_BASE_URL_NOTICIAS, API_IMAGEM_URL } from '../../infra/apiConfig';
import CardNoticiaOld from '../CardNoticiaOld/CardNoticiaOld';
import CardNoticiaHome from '../CardNoticiaHome/CardNoticiaHome';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { useNavigate } from 'react-router-dom';
import { SlideshowLightbox } from 'lightbox.js-react';


const GaleriaHome = () => {
  
  const [imagens, setImagens] = useState([]);
  
  const [loading, setLoading] = useState(false);

  const [numeroSlide, alterarNumeroSlide] = useState(3);


  const navigate = useNavigate();

  const handleClickTodasFotos = () => {
    navigate('/galeria');
    window.scrollTo(0, 0);
    
  };

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
  
  
  useEffect(() => {
    const carregarImagem = async () => {
      setLoading(true);

      try {

        const responseImagens = await Axios.get(`${API_BASE_URL_NOTICIAS}/getImagensMain`, {

        });
        setImagens(responseImagens.data);

      } catch (error) {
        console.error('Erro ao tentar carregar as Imagens:', error);
        alert("Ocorreu um erro ao tentar carregar imagens. Por favor, tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    carregarImagem();
  }, []); 

  return (

    <div className="divNoticiasHome">
      <h1 className="h1SectionTitle">Galeria</h1>

      {loading ? <div className="spinner"><div></div></div> :

        imagens.length === 0 ? <p></p> :

          <Swiper
            slidesPerView={numeroSlide} // Ajuste este valor para o número desejado de vídeos por vez
            spaceBetween={5} // Espaçamento entre os slides (em pixels)
            style={{
              "--swiper-pagination-color": "#f08528",
              "--swiper-navigation-color": "#f08528",
            }}
            grabCursor={true}
            loop={true}
            autoplay={true}

            navigation

          >
            {imagens.map((imagem) => (
              <SwiperSlide key={imagem.caminho_foto}>
                <div
                  key={imagem.caminho_foto}
                  className={`cardImagem`}
                >

                  <SlideshowLightbox
                    theme="day"
                    fullScreen={false}
                    showControls={true}
                    modalClose="clickOutside"
                    className="grid grid-cols-3 gap-2 mx-auto"
                  >
                    <img
                      src={`${API_IMAGEM_URL}${imagem.caminho_foto}`}
                      alt={`Imagem da notícia ${imagem.id_origem}`}
                      className="imagemGaleria imagemHome"
                    />
                  </SlideshowLightbox>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>
      }

      <button
        className="buttonMainPage"
        onClick={handleClickTodasFotos}
      >
        Todas as Fotos
      </button>


    </div>

  );
}

export default GaleriaHome;
