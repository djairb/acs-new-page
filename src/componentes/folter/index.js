import { FaFacebookF, FaInstagram, FaYoutube, FaHeart, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer-redesign">
            <div className="footer-inner">

                {/* Coluna 1 - Brand */}
                <div className="footer-col footer-brand">
                    <h3 className="footer-brand-name">Associação Conexão Social</h3>
                    <p className="footer-brand-desc">
                        Mobilizando pessoas em busca da garantia dos direitos de quem mais precisa, desde 2005.
                    </p>
                    <div className="footer-social-icons">
                        <a href="https://www.facebook.com/conexsoc" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-btn">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/somosconexaosocial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/@SomosConexaoSocial" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-btn">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Coluna 2 - Links rápidos */}
                <div className="footer-col footer-links">
                    <h4 className="footer-col-title">Acesso Rápido</h4>
                    <ul>
                        <li><Link to="/noticias">Blog</Link></li>
                        <li><Link to="/boletins-informativos">Boletins</Link></li>
                        <li><Link to="/transparencia">Transparência</Link></li>
                        <li><Link to="/diretoria">Diretoria</Link></li>
                        <li><Link to="/doacoes">Fazer uma Doação</Link></li>
                    </ul>
                </div>

                {/* Coluna 3 - Contato */}
                <div className="footer-col footer-contact">
                    <h4 className="footer-col-title">Contato</h4>
                    <p><FaMapMarkerAlt className="footer-contact-icon" /> R. Rosa Cândido, 35 — Lagoa do Itaenga, PE</p>
                    <p><FaWhatsapp className="footer-contact-icon" /> (81) 97343-2301</p>
                    <p><FaEnvelope className="footer-contact-icon" /> administrativo@somosconexaosocial.org</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    Feito pelo CTAS &mdash; Centro de Tecnologia da Associação Conexão Social &copy; 2025
                </p>
            </div>
        </footer>
    );
}

export default Footer;