import { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaRoute, FaCalendarAlt, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

import ctacsImg from "../../img/location/locationImg.jpg";

const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.666418158454!2d-35.30186922499361!3d-7.929865992093945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aba723be8539df%3A0xcd1169236520ab2e!2sCTACS%20-%20Centro%20Tecnologico%20da%20Associa%C3%A7%C3%A3o%20Conex%C3%A3o%20Social!5e0!3m2!1spt-BR!2sbr!4v1711306998918!5m2!1spt-BR!2sbr";
const AGENDAMENTO_URL = "https://forms.gle/C7LUHqTZSzJkUzrz5";

function Location() {
    const [showMapa, setShowMapa] = useState(false);

    return (
        <section className='sectionLocation'>

            {/* ── Card "Vem visitar a gente" ── */}
            <div className="visita-section visita-section-location">
                <div className="visita-card visita-card-wide">

                    <div className="visita-header">
                        <div className="visita-icon-circle">
                            <FaMapMarkerAlt />
                        </div>
                        <h2 className="visita-title">Vem visitar a gente!</h2>
                    </div>

                    <div className="visita-info-grid visita-grid-2col">

                        {/* Endereço */}
                        <div className="visita-info-item visita-item-endereco">
                            <FaMapMarkerAlt className="visita-item-icon" />
                            <div style={{ width: '100%' }}>
                                <span className="visita-label">Endereço</span>
                                <p>
                                    Rua Projetada, SN — Setor Tvs R Antonio Neves<br />
                                    Bairro: Salinas, CEP: 55840-000<br />
                                    Lagoa do Itaenga, PE
                                </p>
                                <button
                                    className="visita-btn-rota"
                                    onClick={() => setShowMapa(prev => !prev)}
                                    aria-expanded={showMapa}
                                >
                                    <FaRoute style={{ marginRight: 6 }} />
                                    Ver rota
                                    {showMapa
                                        ? <FaChevronUp style={{ marginLeft: 6, fontSize: '0.75rem' }} />
                                        : <FaChevronDown style={{ marginLeft: 6, fontSize: '0.75rem' }} />
                                    }
                                </button>

                                {showMapa && (
                                    <div className="visita-mapa-expandido">
                                        <iframe
                                            src={MAPS_EMBED}
                                            width="100%"
                                            height="220"
                                            style={{ border: 0, borderRadius: 12 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Mapa CTACS"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Agendamento */}
                        <div className="visita-info-item visita-info-agendamento">
                            <FaCalendarAlt className="visita-item-icon" />
                            <div>
                                <span className="visita-label">Agendamento</span>
                                <p>Quer agendar sua visita? Preencha o formulário e nossa equipe entrará em contato!</p>
                                <a
                                    href={AGENDAMENTO_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="visita-btn-agendamento"
                                >
                                    <FaExternalLinkAlt style={{ marginRight: 6 }} />
                                    Clique aqui
                                </a>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="visita-info-item">
                            <FaWhatsapp className="visita-item-icon" />
                            <div>
                                <span className="visita-label">Telefone / WhatsApp</span>
                                <p>(81) 97343-2301</p>
                            </div>
                        </div>

                        {/* E-mail */}
                        <div className="visita-info-item">
                            <FaEnvelope className="visita-item-icon" />
                            <div>
                                <span className="visita-label">E-mail</span>
                                <p>
                                    <a href="mailto:atendimento@ctacs.org.br">
                                        atendimento@ctacs.org.br
                                    </a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ── Foto da unidade ── */}
            <div className='locationImgDiv'>
                <PhotoProvider>
                    <PhotoView src={ctacsImg}>
                        <img src={ctacsImg} alt="CTACS - Centro Tecnológico ACS" className="locationImg" />
                    </PhotoView>
                </PhotoProvider>
            </div>

        </section>
    );
}

export default Location;