import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import logo from "../../img/logoAcs.png";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <Link to="/"><img src={logo} alt="Logo" /></Link>

        <nav ref={navRef}>
          <Link to="/quem-somos">Quem Somos</Link>
          <Link to="/boletins-informativos">Boletins</Link>
          <Link to="/transparencia">Transparência</Link>

          <div className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Notícias <FaChevronDown className="dropdown-icon" />
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/noticias">Institucionais</Link>
                <Link to="/blog-rebeca">Blog Rebca</Link>
                <Link to="/galeria">Galeria</Link>
              </div>
            )}
          </div>

          <a href="https://somosconexaosocial.org/sra" rel="noopener noreferrer">SRA</a>

          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>

        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </header>

      <div className='spaceLineNav'></div>
    </>
  );
}

export default Navbar;
