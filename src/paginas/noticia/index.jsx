import React, { useEffect, useState } from 'react';
import '../../style/style.css'; // Importe o arquivo CSS
import { useParams } from 'react-router-dom';
import Axios from "axios";
import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import { API_BASE_URL_NOTICIAS, API_IMAGEM_URL } from '../../infra/apiConfig';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';
import ParceirosNoticia from '../../componentes/parceirosNoticia';

import { useNavigate } from 'react-router-dom';
import RodapeBlog from '../../componentes/rodapeBlog';

const Noticia = () => {
    const { slug } = useParams();
    const [loadingGeral, setLoadingGeral] = useState(false);
    const [noticiaCarregadaCompleta, setNoticiaCarregadaCompleta] = useState(false);
    const [noticiaCarregada, setNoticiaCarregada] = useState(false);
    const [loadingImg, setLoadingImg] = useState(false);
    const [fotosNoticia, setFotosNoticia] = useState([]);
    const [vejaMais, setVejaMais] = useState(null);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        if (isNaN(date.getTime())) {
            return '';
        }
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}/${month}/${year}`;
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
                setFotosNoticia(fotosResponse.data);
                setLoadingImg(false);
            } catch (error) {
                console.error('Erro ao carregar fotos:', error);
                alert("Ocorreu um erro ao tentar carregar as fotos da turma. Por favor, tente novamente mais tarde.");
                setLoadingImg(false);
            }
        };
        carregarFotosNoticia();
    }, [noticiaCarregadaCompleta]);

    useEffect(() => {
        const carregarVejaMais = async () => {
            console.log("entrou aqui")
            if (!noticiaCarregadaCompleta) return;
            try {
                const response = await Axios.get(`${API_BASE_URL_NOTICIAS}/getVejaMaisNoticia`, {
                    params: { id: noticiaCarregada.id_noticia }
                });
                if (response.data.length > 0) {
                    setVejaMais(response.data[0]);
                }
            } catch (error) {
                console.error("Erro ao carregar veja mais:", error);
            }
        };
        carregarVejaMais();
    }, [noticiaCarregadaCompleta]);

    const navigate = useNavigate();

    const handleClickVoltar = () => {
        navigate(-1);
        
    };

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
                            <img src={`${API_IMAGEM_URL}${noticiaCarregada.foto_capa}`} alt="Capa da Notícia" className="capa-imagem" />
                        </SlideshowLightbox>

                        <h1 className="titulo-noticia">{noticiaCarregada.titulo}</h1>


                        <p className="descricao-noticia">{noticiaCarregada.descricao}</p>

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
                                                src={`${API_IMAGEM_URL}${image.foto}`}
                                                alt={`uploaded preview`}
                                                className="imagem-carrossel"
                                            />
                                        </SlideshowLightbox>
                                    </div>
                                ))}
                            </div>
                        )}

                        {noticiaCarregada.ir_para_blog === 1 &&  (
                            <>
                                <p className="autor-data">
                                    Por: {noticiaCarregada.nome_autor}, em {formatDate(noticiaCarregada.data_noticia)}
                                </p>
                                <RodapeBlog />
                            </>
                        )}



                        

                        <div className='spaceLineNav'></div>

                        <ParceirosNoticia/>
                        
                    </div>

                ) : (
                    <p>Carregando dados...</p>
                )}

                {vejaMais && (
    <div className="veja-mais-container">
        <h2 className="veja-mais-titulo">Veja também</h2>
        <div
            className="veja-mais-card"
            onClick={() => window.open(`#/noticias/${vejaMais.slug}`, "_blank")}
        >
            <img
                src={`${API_IMAGEM_URL}${vejaMais.foto_capa}`}
                alt={vejaMais.titulo}
                className="veja-mais-imagem"
            />
            <p className="veja-mais-texto">{vejaMais.titulo}</p>
        </div>
    </div>
)}


                {/* <button
                    className="buttonMainPage"
                    onClick={handleClickVoltar}
                >
                    Voltar
                </button> */}
            </main>
            
            <Footer />
        </div>
    );
};

export default Noticia;