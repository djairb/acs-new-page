import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes, FaHeart, FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import logo from "../../img/logoAcs.png";
import jornada from "../../img/jornada-ods.jpg";

function Navbar() {
  const navRef = useRef();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quemSomosOpen, setQuemSomosOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showNavBar = () => {
    const next = !mobileOpen;
    setMobileOpen(next);
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNav = () => {
    setMobileOpen(false);
    setQuemSomosOpen(false);
    navRef.current.classList.remove("responsive_nav");
  };

  // Scroll suave para seções da home
  const scrollToSection = (id) => {
    closeNav();
    const el = document.getElementById(id);
    if (el) {
      const headerH = document.querySelector("header")?.offsetHeight ?? 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerH - 12;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={scrolled ? "header-scrolled" : ""}>
        <Link to="/" onClick={closeNav}>
          <img src={logo} alt="Logo Associação Conexão Social" className="nav-logo" />
        </Link>

        <nav ref={navRef}>

          {/* ── Quem Somos: navega pra seção; no hover abre submenu (Biografia) ── */}
          <div
            className="dropdown"
            onMouseEnter={() => setQuemSomosOpen(true)}
            onMouseLeave={() => setQuemSomosOpen(false)}
          >
            {isHome ? (
              <button
                className="nav-link nav-anchor-btn dropdown-toggle"
                onClick={() => { scrollToSection("quem-somos"); setQuemSomosOpen(false); }}
              >
                Quem Somos
                <FaChevronDown style={{ fontSize: "0.75em", marginLeft: "4px" }} />
              </button>
            ) : (
              <Link
                to="/#quem-somos"
                className="nav-link dropdown-toggle"
                onClick={closeNav}
              >
                Quem Somos
                <FaChevronDown style={{ fontSize: "0.75em", marginLeft: "4px" }} />
              </Link>
            )}

            {quemSomosOpen && (
              <div className="dropdown-menu">
                <Link to="/biografia-iaura" onClick={closeNav}>Biografia</Link>
              </div>
            )}
          </div>

          {isHome ? (
            <button className="nav-link nav-anchor-btn" onClick={() => scrollToSection("nossos-projetos")}>
              Nossos Projetos
            </button>
          ) : (
            <Link to="/#nossos-projetos" className="nav-link" onClick={closeNav}>Nossos Projetos</Link>
          )}

          {isHome ? (
            <button className="nav-link nav-anchor-btn" onClick={() => scrollToSection("parceiros")}>
              Parceiros
            </button>
          ) : (
            <Link to="/#parceiros" className="nav-link" onClick={closeNav}>Parceiros</Link>
          )}

          <Link to="/noticias" className="nav-link" onClick={closeNav}>Notícias</Link>

          <Link to="/transparencia" className="nav-link" onClick={closeNav}>Transparência</Link>

          {isHome ? (
            <button className="nav-link nav-anchor-btn" onClick={() => scrollToSection("contato")}>
              Contato
            </button>
          ) : (
            <Link to="/#contato" className="nav-link" onClick={closeNav}>Contato</Link>
          )}

          <Link to="/doacoes" className="linkComBorda nav-doar" onClick={closeNav}>
            <FaHeart style={{ marginRight: '6px', verticalAlign: 'middle' }} />
            Apoie
          </Link>

          <button className="nav-btn nav-close-btn" onClick={showNavBar} aria-label="Fechar menu">
            <FaTimes />
          </button>
        </nav>

        <Link to="https://www.seloodsbrasil.com.br/" target="_blank" rel="noopener noreferrer">
          <img src={jornada} alt="Em Jornada ODS" className="nav-ods-img" />
        </Link>

        <button className="nav-btn" onClick={showNavBar} aria-label="Abrir menu">
          <FaBars />
        </button>
      </header>

      <div className="spaceLineNav"></div>
    </>
  );
}

export default Navbar;
