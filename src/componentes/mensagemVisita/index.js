import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function MensagemVisita() {
    return (
        <div className="visita-section">
            <div className="visita-card">
                <div className="visita-icon-circle">
                    <FaMapMarkerAlt />
                </div>
                <h2 className="visita-title">Vem visitar a gente!</h2>
                <div className="visita-info-grid">
                    <div className="visita-info-item">
                        <FaMapMarkerAlt className="visita-item-icon" />
                        <div>
                            <span className="visita-label">Endereço</span>
                            <p>Logradouro: Rua Projetada, SN, Complemento: Setor Tvs R Antonio Neves - Bairro: Salinas, CEP: 55840-000 — Lagoa do Itaenga, PE<br/>Centro Tecnológico de Inclusão Digital e Social</p>
                        </div>
                    </div>
                    <div className="visita-info-item">
                        <FaWhatsapp className="visita-item-icon" />
                        <div>
                            <span className="visita-label">Telefone / WhatsApp</span>
                            <p>(81) 97343-2301</p>
                        </div>
                    </div>
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
    );
}

export default MensagemVisita;