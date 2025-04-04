import React, { useEffect, useState } from 'react';
import '../../style/style.css';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';
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
        <h1 className="tituloGaleria">Galeria de Imagens</h1>
        
        
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
                <img 
                  src={`${API_IMAGEM_URL}${imagem.caminho_foto}`}
                  alt={`Imagem da notícia ${imagem.id_origem}`}
                  className="imagemGaleria"
                />
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