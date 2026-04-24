import React, { useEffect, useState } from 'react';
import '../../style/style.css';
import '../../style/noticia.css';
import { useParams } from 'react-router-dom';
import Axios from "axios";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { API_BASE_URL_NOTICIAS, API_IMAGEM_URL } from '../../infra/apiConfig';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';
import ParceirosNoticia from '../../componentes/parceirosNoticia';
import { useNavigate } from 'react-router-dom';
import RodapeBlog from '../../componentes/rodapeBlog';
import CardNoticiaOld2 from '../../componentes/CardNoticiaOld2/CardNoticiaOld2';

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
        if (isNaN(date.getTime())) return '';
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
                setLoadingImg(false);
            }
        };
        carregarFotosNoticia();
    }, [noticiaCarregadaCompleta]);

    useEffect(() => {
        const carregarVejaMais = async () => {
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

    return (
        <div className="page-container">
            <Navbar />

            <main className="noticia-page-main">

                {loadingGeral && (
                    <div className="noticia-loading">
                        <div className="noticia-spinner"></div>
                        <p>Carregando notícia...</p>
                    </div>
                )}

                {noticiaCarregadaCompleta ? (
                    <article className="noticia-article">

                        {/* ── HERO CAPA ── */}
                        <div className="noticia-hero">
                            <PhotoProvider>
                                <PhotoView src={`${API_IMAGEM_URL}${noticiaCarregada.foto_capa}`}>
                                    <img
                                        src={`${API_IMAGEM_URL}${noticiaCarregada.foto_capa}`}
                                        alt="Capa da Notícia"
                                        className="noticia-hero-img"
                                        style={{ cursor: 'zoom-in' }}
                                    />
                                </PhotoView>
                            </PhotoProvider>
                            <div className="noticia-hero-overlay">
                                <div className="noticia-hero-badge">Notícia</div>
                                <h1 className="noticia-hero-titulo">{noticiaCarregada.titulo}</h1>
                                {noticiaCarregada.ir_para_blog === 1 && (
                                    <p className="noticia-hero-meta">
                                        <span className="noticia-hero-meta-icon">✍️</span>
                                        Por <strong>{noticiaCarregada.nome_autor}</strong> &nbsp;·&nbsp; {formatDate(noticiaCarregada.data_noticia)}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* ── CORPO DA NOTÍCIA ── */}
                        <div className="noticia-body">

                            {/* Fio condutor / subtítulo */}
                            <div className="noticia-lead">
                                <p className="noticia-descricao">{noticiaCarregada.descricao}</p>
                            </div>

                            {/* ── GALERIA EM GRADE ── */}
                            {loadingImg ? (
                                <div className="noticia-loading-mini">
                                    <div className="noticia-spinner"></div>
                                </div>
                            ) : fotosNoticia.length > 0 && (
                                <section className="noticia-galeria-section">
                                    <div className="noticia-galeria-header">
                                        <span className="noticia-galeria-linha"></span>
                                        <h2 className="noticia-galeria-titulo">📸 Galeria de fotos</h2>
                                        <span className="noticia-galeria-linha"></span>
                                    </div>

                                    <PhotoProvider>
                                        <div className={`noticia-galeria-grid ${fotosNoticia.length === 1 ? 'galeria-1' : fotosNoticia.length === 2 ? 'galeria-2' : fotosNoticia.length === 3 ? 'galeria-3' : 'galeria-4plus'}`}>
                                            {fotosNoticia.map((image, idx) => (
                                                <PhotoView key={image.id_foto} src={`${API_IMAGEM_URL}${image.foto}`}>
                                                    <div className={`noticia-galeria-item ${idx === 0 && fotosNoticia.length >= 4 ? 'galeria-destaque' : ''}`}>
                                                        <img
                                                            src={`${API_IMAGEM_URL}${image.foto}`}
                                                            alt={`Foto ${idx + 1}`}
                                                            className="noticia-galeria-img"
                                                            style={{ cursor: 'zoom-in' }}
                                                        />
                                                        <div className="noticia-galeria-hover">
                                                            <span>🔍 Ver foto</span>
                                                        </div>
                                                    </div>
                                                </PhotoView>
                                            ))}
                                        </div>
                                    </PhotoProvider>

                                    <p className="noticia-galeria-dica">Clique em qualquer foto para ampliar</p>
                                </section>
                            )}

                            {/* ── BLOG RODAPÉ ── */}
                            {noticiaCarregada.ir_para_blog === 1 && (
                                <div className="noticia-blog-section">
                                    <RodapeBlog />
                                </div>
                            )}

                        </div>{/* fim noticia-body */}

                        {/* ── DIVISOR ── */}
                        <div className="spaceLineNav"></div>

                        {/* ── PARCEIROS ── */}
                        <ParceirosNoticia />

                    </article>
                ) : (
                    !loadingGeral && <p className="noticia-sem-dados">Notícia não encontrada.</p>
                )}

                {/* ── VEJA TAMBÉM ── */}
                {vejaMais && (
                    <div className="noticia-veja-mais">
                        <div className="noticia-veja-mais-inner">
                            <div className="noticia-veja-mais-header">
                                <span className="noticia-galeria-linha"></span>
                                <h2 className="noticia-veja-mais-titulo">Veja também</h2>
                                <span className="noticia-galeria-linha"></span>
                            </div>
                            <CardNoticiaOld2
                                key={vejaMais.id_noticia}
                                foto_capa={vejaMais.foto_capa}
                                titulo={vejaMais.titulo}
                                slug={vejaMais.slug}
                            />
                        </div>
                    </div>
                )}

            </main>

            <Footer />
        </div>
    );
};

export default Noticia;