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


const NoticiasHome = () => {
  
  const [noticias, setNoticias] = useState([]);
  
  const [loading, setLoading] = useState(false);
  
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

      <div className="divReportagens">
          <h1 className="h1SectionTitle">Notícias</h1>

          {loading ? <div className="spinner"><div></div></div> :

              noticias.length === 0 ? <p></p> :

                  <Swiper
                      slidesPerView={1} // Ajuste este valor para o número desejado de vídeos por vez
                      spaceBetween={1} // Espaçamento entre os slides (em pixels)
                      style={{
                          "--swiper-pagination-color": "#f08528",
                          "--swiper-navigation-color": "#f08528",
                      }}
                      grabCursor={true}
                      loop={true}
                      autoplay={true}

                      navigation
                      className="swiperMaster"
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


      </div>
   
  );
}

export default NoticiasHome;
