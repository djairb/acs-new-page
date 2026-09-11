import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/style.css';
import './premios.css';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';
import PremiosSection from '../../componentes/premiosSection';

function Premios() {
  return (
    <>
      <Navbar />

      <main className="pr-page">
        <div className="pr-breadcrumb">
          <Link to="/">Início</Link>
          <span>/</span>
          <Link to="/#quem-somos">Sobre Nós</Link>
          <span>/</span>
          <span className="pr-breadcrumb-atual">Prêmios e Reconhecimentos</span>
        </div>

        <PremiosSection />
      </main>

      <Footer />
    </>
  );
}

export default Premios;
