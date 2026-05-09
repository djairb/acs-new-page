import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Footer() {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === "/";

    const scrollToSection = (id) => {
        if (isHome) {
            const el = document.getElementById(id);
            if (el) {
                const headerH = document.querySelector("header")?.offsetHeight ?? 80;
                const top = el.getBoundingClientRect().top + window.scrollY - headerH - 12;
                window.scrollTo({ top, behavior: "smooth" });
            }
        } else {
            navigate(`/#${id}`);
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    const headerH = document.querySelector("header")?.offsetHeight ?? 80;
                    const top = el.getBoundingClientRect().top + window.scrollY - headerH - 12;
                    window.scrollTo({ top, behavior: "smooth" });
                }
            }, 300);
        }
    };

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
                        <li>
                            <button className="footer-anchor-btn" onClick={() => scrollToSection("quem-somos")}>
                                Quem Somos
                            </button>
                        </li>
                        <li>
                            <button className="footer-anchor-btn" onClick={() => scrollToSection("nossos-projetos")}>
                                Nossos Projetos
                            </button>
                        </li>
                        <li>
                            <button className="footer-anchor-btn" onClick={() => scrollToSection("parceiros")}>
                                Parceiros
                            </button>
                        </li>
                        <li><Link to="/noticias">Notícias</Link></li>
                        <li><Link to="/boletins-informativos">Boletins</Link></li>
                        <li><Link to="/transparencia">Transparência</Link></li>
                        <li><Link to="/diretoria">Diretoria</Link></li>
                        <li>
                            <button className="footer-anchor-btn" onClick={() => scrollToSection("contato")}>
                                Contato
                            </button>
                        </li>
                        <li><Link to="/doacoes">Apoie</Link></li>
                    </ul>
                </div>

                {/* Coluna 3 - Contato */}
                <div className="footer-col footer-contact">
                    <h4 className="footer-col-title">Contato</h4>
                    <p><FaMapMarkerAlt className="footer-contact-icon" /> Logradouro: Rua Projetada, SN, Complemento: Setor Tvs R Antonio Neves - Bairro: Salinas, CEP: 55840-000 — Lagoa do Itaenga, PE</p>
                    <p><FaWhatsapp className="footer-contact-icon" /> (81) 97343-2301</p>
                    <p><FaEnvelope className="footer-contact-icon" /> atendimento@ctacs.org.br</p>
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