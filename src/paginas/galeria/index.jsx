import React, { useEffect, useState } from 'react';
import '../../style/style.css';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import Axios from 'axios';
import { API_BASE_URL_NOTICIAS, API_IMAGEM_URL } from '../../infra/apiConfig';

const GaleriaImagens = () => {
  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 12; // quantidade por página
  const [hasMore, setHasMore] = useState(true);

  const carregarImagens = async (pageNum = 1) => {
    setLoading(true);
    try {
      const response = await Axios.get(
        `${API_BASE_URL_NOTICIAS}/getTodasImagens2?page=${pageNum}&limit=${limit}`
      );

      const novasImagens = response.data;

      if (novasImagens.length < limit) {
        setHasMore(false); // não tem mais páginas
      }

      if (pageNum === 1) {
        // primeira página → substitui
        setImagens(novasImagens);
      } else {
        // páginas seguintes → concatena
        setImagens((prev) => [...prev, ...novasImagens]);
      }
    } catch (error) {
      console.error('Erro ao carregar imagens:', error);
      alert("Erro ao carregar galeria. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarImagens(1); // ao montar carrega a primeira página
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    carregarImagens(nextPage);
  };

  return (
    <>
      <Navbar />
      <main className='mainGaleria'>
        <div className='containerGaleria'>
          {loading && imagens.length === 0 ? (
            <div className="spinnerButton"><div></div></div>
          ) : imagens.length === 0 ? (
            <p>Nenhuma imagem encontrada</p>
          ) : (            
            imagens.map((imagem) => (
              <div 
                key={`${imagem.tipo_foto}-${imagem.id_origem}-${imagem.caminho_foto}`} 
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
                    className="imagemGaleria"
                  />
                </SlideshowLightbox>
              </div>
            ))
          )}
        </div>

        {/* Botão Carregar mais */}
        {hasMore && !loading && imagens.length > 0 && (
          <div className="btnLoadMore">
            <button onClick={handleLoadMore}>Carregar mais</button>
          </div>
        )}

        {/* Spinner quando carrega novas páginas */}
        {loading && imagens.length > 0 && (
          <div className="spinnerButton"><div></div></div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default GaleriaImagens;
