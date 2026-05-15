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

    // ── Comentários ────────────────────────────────────────────
    const [comentarios, setComentarios] = useState([]);
    const [loadingComentarios, setLoadingComentarios] = useState(false);
    const [enviandoComentario, setEnviandoComentario] = useState(false);
    const [comentarioEnviado, setComentarioEnviado] = useState(false);
    const [erroComentario, setErroComentario] = useState('');
    const [nomeAutor, setNomeAutor] = useState('');
    const [textoComentario, setTextoComentario] = useState('');

    // ── Compartilhar ───────────────────────────────────────────
    const [mostrarOpcoes, setMostrarOpcoes] = useState(false);
    const [linkCopiado, setLinkCopiado] = useState(false);

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

    useEffect(() => {
        const carregarComentarios = async () => {
            if (!noticiaCarregadaCompleta) return;
            setLoadingComentarios(true);
            try {
                const res = await Axios.get(`${API_BASE_URL_NOTICIAS}/getComentariosByIdNoticia`, {
                    params: { id: noticiaCarregada.id_noticia }
                });
                setComentarios(res.data);
            } catch (error) {
                console.error('Erro ao carregar comentários:', error);
            } finally {
                setLoadingComentarios(false);
            }
        };
        carregarComentarios();
    }, [noticiaCarregadaCompleta]);

    const handleEnviarComentario = async (e) => {
        e.preventDefault();
        setErroComentario('');
        if (!nomeAutor.trim() || !textoComentario.trim()) {
            setErroComentario('Preencha seu nome e o comentário antes de enviar.');
            return;
        }
        if (nomeAutor.trim().length > 100) {
            setErroComentario('O nome deve ter no máximo 100 caracteres.');
            return;
        }
        if (textoComentario.trim().length > 2000) {
            setErroComentario('O comentário deve ter no máximo 2000 caracteres.');
            return;
        }
        setEnviandoComentario(true);
        try {
            await Axios.post(`${API_BASE_URL_NOTICIAS}/inserirComentario`, {
                id_noticia: noticiaCarregada.id_noticia,
                nome_autor: nomeAutor.trim(),
                texto: textoComentario.trim()
            });
            setComentarioEnviado(true);
            setNomeAutor('');
            setTextoComentario('');
            // Recarrega a lista de comentários
            const res = await Axios.get(`${API_BASE_URL_NOTICIAS}/getComentariosByIdNoticia`, {
                params: { id: noticiaCarregada.id_noticia }
            });
            setComentarios(res.data);
            setTimeout(() => setComentarioEnviado(false), 4000);
        } catch (error) {
            console.error('Erro ao enviar comentário:', error);
            setErroComentario('Erro ao enviar comentário. Tente novamente.');
        } finally {
            setEnviandoComentario(false);
        }
    };

    const handleCompartilhar = async () => {
        const url = `https://noticia.somosconexaosocial.org/og/${noticiaCarregada.slug}`;
        const texto = `${noticiaCarregada.titulo} — Leia em: ${url}`;
        if (navigator.share) {
            try {
                await navigator.share({ title: noticiaCarregada.titulo, text: texto, url });
            } catch (err) {
                // usuário cancelou
            }
        } else {
            setMostrarOpcoes(prev => !prev);
        }
    };

    const handleCopiarLink = () => {
        const url = `https://noticia.somosconexaosocial.org/og/${noticiaCarregada.slug}`;
        navigator.clipboard.writeText(url).then(() => {
            setLinkCopiado(true);
            setTimeout(() => setLinkCopiado(false), 2500);
        });
    };

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
                        </div>

                        {/* ── CABEÇALHO DA NOTÍCIA ── */}
                        <div className="noticia-header-info">
                            <span className="noticia-header-badge">Notícia</span>
                            <h1 className="noticia-header-titulo">{noticiaCarregada.titulo}</h1>
                            {noticiaCarregada.ir_para_blog === 1 && (
                                <p className="noticia-header-meta">
                                    <span>✍️</span>
                                    Por <strong>{noticiaCarregada.nome_autor}</strong>
                                    <span className="noticia-header-sep">·</span>
                                    {formatDate(noticiaCarregada.data_noticia)}
                                </p>
                            )}
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

                         {/* ── BOTÃO COMPARTILHAR ── */}
                        <div className="compartilharWrapper">
                            <button className="btnCompartilhar" onClick={handleCompartilhar}>
                                Compartilhar
                            </button>
                            {mostrarOpcoes && (() => {
                                const url = `https://noticia.somosconexaosocial.org/og/${noticiaCarregada.slug}`;
                                const texto = `${noticiaCarregada.titulo} — Leia em: ${url}`;
                                const urlWhatsapp = `https://api.whatsapp.com/send?text=${encodeURIComponent(texto)}`;
                                const urlTelegram = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(noticiaCarregada.titulo)}`;
                                return (
                                    <div className="compartilharDropdown">
                                        <a href={urlWhatsapp} target="_blank" rel="noreferrer" className="compartilharOpcao">
                                            💬 WhatsApp
                                        </a>
                                        <a href={urlTelegram} target="_blank" rel="noreferrer" className="compartilharOpcao">
                                            ✈️ Telegram
                                        </a>
                                        <button className="compartilharOpcao" onClick={handleCopiarLink}>
                                            {linkCopiado ? 'Copiado!' : 'Copiar link'}
                                        </button>
                                    </div>
                                );
                            })()}
                        </div>

                        {/* ── SEÇÃO DE COMENTÁRIOS ── */}
                        <section className="noticia-comentarios-section">
                            <div className="noticia-comentarios-inner">

                                {/* Cabeçalho da seção */}
                                <div className="noticia-comentarios-header">
                                    <span className="noticia-galeria-linha"></span>
                                    <h2 className="noticia-comentarios-titulo">
                                        Comentários
                                        {comentarios.length > 0 && (
                                            <span className="noticia-comentarios-count">{comentarios.length}</span>
                                        )}
                                    </h2>
                                    <span className="noticia-galeria-linha"></span>
                                </div>

                                {/* Formulário */}
                                <form className="noticia-comentario-form" onSubmit={handleEnviarComentario}>
                                    <div className="noticia-comentario-form-campos">
                                        <div className="noticia-comentario-campo">
                                            <label htmlFor="comentario-nome">Seu nome</label>
                                            <input
                                                id="comentario-nome"
                                                type="text"
                                                placeholder="Como você se chama?"
                                                value={nomeAutor}
                                                onChange={e => setNomeAutor(e.target.value)}
                                                maxLength={100}
                                                disabled={enviandoComentario}
                                            />
                                        </div>
                                        <div className="noticia-comentario-campo noticia-comentario-campo--texto">
                                            <label htmlFor="comentario-texto">Comentário</label>
                                            <textarea
                                                id="comentario-texto"
                                                placeholder="Escreva o seu comentário sobre esta notícia..."
                                                value={textoComentario}
                                                onChange={e => setTextoComentario(e.target.value)}
                                                rows={4}
                                                maxLength={2000}
                                                disabled={enviandoComentario}
                                            />
                                            <span className="noticia-comentario-chars">
                                                {textoComentario.length}/2000
                                            </span>
                                        </div>
                                    </div>

                                    {erroComentario && (
                                        <p className="noticia-comentario-erro">{erroComentario}</p>
                                    )}
                                    {comentarioEnviado && (
                                        <p className="noticia-comentario-sucesso">✅ Comentário publicado com sucesso!</p>
                                    )}

                                    <button
                                        type="submit"
                                        className="noticia-comentario-btn"
                                        disabled={enviandoComentario}
                                    >
                                        {enviandoComentario ? (
                                            <><span className="noticia-comentario-btn-spinner"></span> Enviando...</>
                                        ) : 'Publicar comentário'}
                                    </button>
                                </form>

                                {/* Lista de comentários */}
                                {loadingComentarios ? (
                                    <div className="noticia-loading-mini">
                                        <div className="noticia-spinner"></div>
                                    </div>
                                ) : comentarios.length === 0 ? (
                                    <p className="noticia-comentarios-vazio">
                                        Nenhum comentário ainda. Seja o primeiro a comentar! 👇
                                    </p>
                                ) : (
                                    <div className="noticia-comentarios-lista">
                                        {comentarios.map(c => (
                                            <div key={c.id_comentario} className="noticia-comentario-card">
                                                <div className="noticia-comentario-card-avatar">
                                                    {c.nome_autor.charAt(0).toUpperCase()}
                                                </div>
                                                <div className="noticia-comentario-card-body">
                                                    <div className="noticia-comentario-card-meta">
                                                        <strong className="noticia-comentario-card-nome">{c.nome_autor}</strong>
                                                        <span className="noticia-comentario-card-data">
                                                            {new Date(c.data_comentario).toLocaleDateString('pt-BR', {
                                                                day: '2-digit', month: 'short', year: 'numeric'
                                                            })}
                                                        </span>
                                                    </div>
                                                    <p className="noticia-comentario-card-texto">{c.texto}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </div>
                        </section>

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