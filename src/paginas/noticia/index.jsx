import React, { useEffect, useState } from 'react';
import '../../style/style.css';
import { useParams } from 'react-router-dom';


import Axios from "axios";

import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css'

import { API_BASE_URL_NOTICIAS } from '../../infra/apiConfig';




const Noticia = () => {


    const { slug } = useParams();
    

   


    const [loadingGeral, setLoadingGeral] = useState(false);

    const [noticiaCarregadaCompleta, setNoticiaCarregadaCompleta] = useState(false);

    const [noticiaCarregada, setNoticiaCarregada] = useState(false);

    const [loadingImg, setLoadingImg] = useState(false);

    const [fotosNoticia, setFotosNoticia] = useState([]);


    const [isHome, setIsHome] = useState(false);

    const [dataFoto, setDataFoto] = useState(false);


    const arrayBufferToDataURL = (arrayBuffer, mimeType = 'image/jpeg') => {
        const bytes = new Uint8Array(arrayBuffer);
        const binaryString = Array.from(bytes).map(byte => String.fromCharCode(byte)).join('');
        const base64String = window.btoa(binaryString);
        return `data:${mimeType};base64,${base64String}`;
    };
    
    


    useEffect(() => {
        const carregarNoticia = async () => {
          setLoadingGeral(true);
    
          try {
            
            const responseNoticia = await Axios.get(`${API_BASE_URL_NOTICIAS}/getNoticiaGeralBySlug`, {
              params: { slug: slug }
            });
            setNoticiaCarregada(responseNoticia.data[0]);
            setNoticiaCarregadaCompleta(true);
            setDataFoto(arrayBufferToDataURL(new Uint8Array(responseNoticia.data[0].foto_capa.data)))        
                      
          } catch (error) {
            console.error('Erro ao tentar carregar as Notícias:', error);
            alert("Ocorreu um erro ao tentar carregar notícias. Por favor, tente novamente mais tarde.");
          } finally {
            setLoadingGeral(false);
          }
        };
    
        carregarNoticia();
      }, [slug]);

      // useEffect(() => {
    //     const carregarFotosNoticia = async () => {

    //         if (!noticiaCarregadaCompleta) return;
            

    //         setLoadingImg(true); //mantem o loading aberto

    //         try {
    //             const fotosResponse = await Axios.get(`${API_BASE_URL_NOTICIAS}/getAllFotosByIdNoticia`, {
    //                 headers: {
    //                     Authorization: `Bearer ${user.token}`, // O token armazenado no contexto
    //                 },
    //                 params: { id: noticiaCarregada.id_noticia }
    //             });

    //             setFotosNoticia(fotosResponse.data.map((image) => ({
    //                 ...image,
    //                 blob: arrayBufferToDataURL(new Uint8Array(image.foto.data))
    //             })));

    //             setLoadingImg(false);
                
                

    //         } catch (error) {
    //             console.error('Erro ao carregar fotos:', error);
    //             alert("Ocorreu um erro ao tentar carregar as fotos da turma. Por favor, tente novamente mais tarde.");
    //             setLoadingImg(false);
    //         }
    //     };

    //     carregarFotosNoticia();
    // }, [noticiaCarregadaCompleta]);


    return (

        <main className='mainNoticia'>
            {loadingGeral && <div className="spinnerButton"><div></div></div>}
            {noticiaCarregadaCompleta ? ( // Condição para carregar os dados
                <div>

                    <img src={dataFoto} />

                    <h1>{noticiaCarregada.titulo}</h1>
                
                </div>
            ) : (
                <p>Carregando dados...</p> // Exibição temporária enquanto os dados são carregados
            )}



        </main> 



    );
};

export default Noticia;
