import React, { useEffect, useState } from 'react';
import '../../style/style.css';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';

import Axios from 'axios';


import { API_BASE_URL_NOTICIAS } from '../../infra/apiConfig';
import CardNoticiaOld from '../../componentes/CardNoticiaOld/CardNoticiaOld';
import CardNoticiaHome from '../CardNoticiaHome/CardNoticiaHome';


const NoticiasHome = () => {
  
  const [noticias, setNoticias] = useState([]);
  
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const carregarNoticias = async () => {
      setLoading(true);

      try {

        const responseNoticias = await Axios.get(`${API_BASE_URL_NOTICIAS}/getAllNoticiasGeral`, {

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
    
    <>

      <Navbar />

      <main className='mainTodasNoticias'>

        <div className='divTodasNoticias'>

          {loading ? <div className="spinner"><div></div></div> :

            noticias.length === 0 ? <p></p> :

              noticias.map(noticia => (

                <CardNoticiaHome

                  key={noticia.id_noticia}
                  foto_capa={noticia.foto_capa}
                  titulo={noticia.titulo}                  
                  slug={noticia.slug}
                  

                />

              ))
          }

        </div>

      </main>

      <Footer />

    </>
  );
}

export default NoticiasHome;
