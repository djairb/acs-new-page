import React, { useEffect, useRef, useState } from 'react';
import '../../style/style.css';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';

import Axios from 'axios';

import { API_BASE_URL_NOTICIAS } from '../../infra/apiConfig';
import CardNoticiaOld from '../../componentes/CardNoticiaOld/CardNoticiaOld';
import Cabecalho from '../../componentes/cabecalhoBlog';


const TodasNoticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 12;
  const [hasMore, setHasMore] = useState(true);
  const newsContainerRef = useRef(null);

  const carregarNoticias = async (pageNum = 1) => {
      setLoading(true);
      try {
        const responseNoticias = await Axios.get(`${API_BASE_URL_NOTICIAS}/getAllNoticiasACS2?page=${pageNum}&limit=${limit}`);

        const novasNoticias = responseNoticias.data;

        if (novasNoticias.length < limit){
          
          setHasMore(false);
        }

        if (pageNum === 1){
          setNoticias(novasNoticias);
        } else {
          setNoticias((prev) => [...prev, ...novasNoticias]);
        }        
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

  useEffect(() => {

    carregarNoticias(1);
    

  }, []);

    const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    carregarNoticias(nextPage);
  };

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

        {/* Botão Carregar mais */}
        {hasMore && !loading && noticias.length > 0 && (
          <div className="btnLoadMore">
            <button onClick={handleLoadMore}>Carregar mais</button>
          </div>
        )}

        {/* Spinner quando carrega novas páginas */}
        {loading && noticias.length > 0 && (
          <div className="spinnerButton"><div></div></div>
        )}

      </main>
      <Footer />
    </>
  );
};

export default TodasNoticias;


