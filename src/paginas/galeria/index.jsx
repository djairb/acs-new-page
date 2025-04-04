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

  useEffect(() => {
    const carregarImagens = async () => {
      setLoading(true);
      try {
        const response = await Axios.get(`${API_BASE_URL_NOTICIAS}/getTodasImagens`);
        setImagens(response.data);
      } catch (error) {
        console.error('Erro ao carregar imagens:', error);
        alert("Erro ao carregar galeria. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
        
      }
    };

    carregarImagens();
  }, []);

  return (
    <>
    {console.log(imagens)}

    
      <Navbar />
      <main className='mainGaleria'>
        <div className='spaceLineNav espacoLine'></div>
        
        
        <div className='containerGaleria'>
          {loading ? (
            <div className="spinnerButton"><div></div></div>
          ) : imagens.length === 0 ? (
            <p>Nenhuma imagem encontrada</p>
          ) : (            
            imagens.map((imagem) => (
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
                  className="imagemGaleria"
                />
                </SlideshowLightbox>
                
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GaleriaImagens;