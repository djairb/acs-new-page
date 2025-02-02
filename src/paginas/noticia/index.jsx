import React, { useEffect, useState } from 'react';
import '../../style/style.css'; // Importe o arquivo CSS
import { useParams } from 'react-router-dom';
import Axios from "axios";
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import { API_BASE_URL_NOTICIAS } from '../../infra/apiConfig';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';

const Noticia = () => {
    const { slug } = useParams();
    const [loadingGeral, setLoadingGeral] = useState(false);
    const [noticiaCarregadaCompleta, setNoticiaCarregadaCompleta] = useState(false);
    const [noticiaCarregada, setNoticiaCarregada] = useState(false);
    const [loadingImg, setLoadingImg] = useState(false);
    const [fotosNoticia, setFotosNoticia] = useState([]);
    const [dataFoto, setDataFoto] = useState(false);

    const arrayBufferToDataURL = (arrayBuffer, mimeType = 'image/jpeg') => {
        const bytes = new Uint8Array(arrayBuffer);
        const binaryString = Array.from(bytes).map(byte => String.fromCharCode(byte)).join('');
        const base64String = window.btoa(binaryString);
        return `data:${mimeType};base64,${base64String}`;
    };

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        if (isNaN(date.getTime())) {
            return '';
        }
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
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
                setDataFoto(arrayBufferToDataURL(new Uint8Array(responseNoticia.data[0].foto_capa.data)));
            } catch (error) {
                console.error('Erro ao tentar carregar as Notícias:', error);
                alert("Ocorreu um erro ao tentar carregar notícias. Por favor, tente novamente mais tarde.");
            } finally {
                setLoadingGeral(false);
            }
        };
        carregarNoticia();
    }, [slug]);

    useEffect(() => {
        const carregarFotosNoticia = async () => {
            if (!noticiaCarregadaCompleta) return;
            setLoadingImg(true);
            try {
                const fotosResponse = await Axios.get(`${API_BASE_URL_NOTICIAS}/getAllFotosByIdNoticiaGeral`, {
                    params: { id: noticiaCarregada.id_noticia }
                });
                setFotosNoticia(fotosResponse.data.map((image) => ({
                    ...image,
                    blob: arrayBufferToDataURL(new Uint8Array(image.foto.data))
                })));
                setLoadingImg(false);
            } catch (error) {
                console.error('Erro ao carregar fotos:', error);
                alert("Ocorreu um erro ao tentar carregar as fotos da turma. Por favor, tente novamente mais tarde.");
                setLoadingImg(false);
            }
        };
        carregarFotosNoticia();
    }, [noticiaCarregadaCompleta]);

    return (
        <div className="page-container">
            <Navbar />
            <main className="main-noticia">
                {loadingGeral && <div className="spinner"><div></div></div>}
                {noticiaCarregadaCompleta ? (
                    <div className="content-container">
                        <SlideshowLightbox
                            theme="day"
                            fullScreen={false}
                            showControls={true}
                            modalClose="clickOutside"
                            className="grid grid-cols-3 gap-2 mx-auto"
                        >
                            <img src={dataFoto} alt="Capa da Notícia" className="capa-imagem" />
                        </SlideshowLightbox>

                        {/* <h1 className="titulo-noticia">{noticiaCarregada.titulo}</h1> */}

                        <h1 className="titulo-noticia">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <p>{noticiaCarregada.descricao}</p>

                        {loadingImg ? <div className="spinner"></div> : (
                            <div className="carrossel-imagens">
                                {fotosNoticia.map((image) => (
                                    <div key={image.id_foto}>
                                        <SlideshowLightbox
                                            theme="day"
                                            fullScreen={false}
                                            showControls={true}
                                            modalClose="clickOutside"
                                            className="grid grid-cols-3 gap-2 mx-auto"
                                        >
                                            <img
                                                src={image.blob}
                                                alt={`uploaded preview`}
                                                className="imagem-carrossel"
                                            />
                                        </SlideshowLightbox>
                                    </div>
                                ))}
                            </div>
                        )}

                        <p className="autor-data"> Autor: {noticiaCarregada.nome_autor}, em {formatDate(noticiaCarregada.data_noticia)}</p>
                    </div>
                ) : (
                    <p>Carregando dados...</p>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Noticia;