import React, { useEffect, useState } from 'react';
import '../../style/style.css';
import Navbar from '../nav';
import Footer from '../folter';

import Axios from 'axios';


import { API_BASE_URL_NOTICIAS } from '../../infra/apiConfig';
import CardNoticiaOld from '../CardNoticiaOld/CardNoticiaOld';
import CardNoticiaHome from '../CardNoticiaHome/CardNoticiaHome';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { useNavigate } from 'react-router-dom';


const NoticiasHome = () => {
  
  const [noticias, setNoticias] = useState([]);
  
  const [loading, setLoading] = useState(false);

  const [numeroSlide, alterarNumeroSlide] = useState(3);

  const navigate = useNavigate();

  const handleClickTodasNoticias = () => {
    navigate('/noticias');
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
    const carregarNoticias = async () => {
      setLoading(true);

      try {

        const responseNoticias = await Axios.get(`${API_BASE_URL_NOTICIAS}/getNoticiasHomeGeral`, {

        });
        setNoticias(responseNoticias.data);

      } catch (error) {
        console.error('Erro ao tentar carregar as Notícias:', error);
        alert("Ocorreu um erro ao tentar carregar notícias. Por favor, tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    carregarNoticias();
  }, []); 

  return (

      <div className="divNoticiasHome">
          <h1 className="h1SectionTitle">Notícias</h1>

          {loading ? <div className="spinner"><div></div></div> :

              noticias.length === 0 ? <p></p> :

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
                      {noticias.map((noticia) => (
                          <SwiperSlide key={noticia.id_noticia}>
                              <CardNoticiaHome
                                  key={noticia.id_noticia}
                                  foto_capa={noticia.foto_capa}
                                  titulo={noticia.titulo}
                                  slug={noticia.slug}
                              />

                          </SwiperSlide>
                      ))}
                  </Swiper>
          }

          <button
            className="buttonMainPage"
            onClick={handleClickTodasNoticias}
          >
            Todas Notícias
          </button>


      </div>
   
  );
}

export default NoticiasHome;
