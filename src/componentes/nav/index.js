import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes, FaHeart, FaChevronDown } from "react-icons/fa";

import logo from "../../img/logoAcs.png";
import jornada from "../../img/jornada-ods.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <>
      <header className={scrolled ? "header-scrolled" : ""}>
        <Link to="/" onClick={closeNav}>
          <img src={logo} alt="Logo Associação Conexão Social" className="nav-logo" />
        </Link>

        <nav ref={navRef}>
          <Link to="/noticias" className="nav-link" onClick={closeNav}>Blog</Link>
          <Link to="/boletins-informativos" className="nav-link" onClick={closeNav}>Boletins</Link>
          <Link to="/transparencia" className="nav-link" onClick={closeNav}>Transparência</Link>
          <Link to="/diretoria" className="nav-link" onClick={closeNav}>Diretoria</Link>
          <a href="https://somosconexaosocial.org/sra" rel="noopener noreferrer" className="nav-link" onClick={closeNav}>SRA</a>

          <Link to="/doacoes" className="linkComBorda nav-doar" onClick={closeNav}>
            <FaHeart style={{ marginRight: '6px', verticalAlign: 'middle' }} />
            Doar
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
