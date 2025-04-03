import React, { useEffect, useRef, useState } from 'react';
import '../../style/style.css';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';

import Axios from 'axios';


import { API_BASE_URL_NOTICIAS } from '../../infra/apiConfig';
import CardNoticiaOld from '../../componentes/CardNoticiaOld/CardNoticiaOld';


const TodasNoticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(false);
  const newsContainerRef = useRef(null);

  useEffect(() => {
    const carregarNoticias = async () => {
      setLoading(true);
      try {
        const responseNoticias = await Axios.get(`${API_BASE_URL_NOTICIAS}/getAllNoticiasGeral`);
        setNoticias(responseNoticias.data);
        
        // Restaura o scroll APÓS o carregamento das notícias
        const savedPosition = sessionStorage.getItem('noticiasScrollPosition');
        if (savedPosition && newsContainerRef.current) {
          setTimeout(() => {
            window.scrollTo({
              top: parseInt(savedPosition),
              behavior: 'smooth'  // Adiciona animação suave
            });
            sessionStorage.removeItem('noticiasScrollPosition');
          }, 100);
        }
      } catch (error) {
        console.error('Erro ao carregar notícias:', error);
        alert("Erro ao carregar notícias. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    carregarNoticias();
  }, []);

  return (
    <>
      <Navbar />
      <main className='mainTodasNoticias' ref={newsContainerRef}>
        <div className='divTodasNoticias'>
          {loading ? (
            <div className="spinnerButton"><div></div></div>
          ) : noticias.length === 0 ? (
            <p>Sem notícias registradas</p>
          ) : (
            noticias.map(noticia => (
              <CardNoticiaOld
                key={noticia.id_noticia}
                foto_capa={noticia.foto_capa}
                titulo={noticia.titulo}
                slug={noticia.slug}
              />
            ))
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TodasNoticias;


