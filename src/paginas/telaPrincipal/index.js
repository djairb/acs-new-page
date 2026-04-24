
import '../../style/style.css';

import Navbar from "../../componentes/nav";
import Location from "../../componentes/location";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Parceiros from "../../componentes/parceiros";
import Footer from "../../componentes/folter";

import MensagemVisita from "../../componentes/mensagemVisita";
import ProjetosSelecionar from '../../componentes/projetosSelecionar';
import VideoCarrossel from '../../componentes/videoCarrossel';

import MainVideo from '../../componentes/main_video';
import MainSomosConexao from '../../componentes/main_somos_conexao';
import NoticiasHome from '../../componentes/noticiasHome/NoticiasHome';
import GaleriaHome from '../../componentes/galeriaHome/GaleriaHome';
import OdsHome from '../../componentes/odsHome/OdsHome';
import CardVideo from '../../componentes/cardVideo';
import CardTechfest from '../../componentes/cardTechFest';
import VideoCarrossel2 from '../../componentes/videoCarrossel2';
import OdsSelecionar from '../../componentes/odsSelecionar';
import CardContratacao from '../../componentes/cardContratacao';
import CardContratacaoSlide from '../../componentes/cardContratacaoSlide';
import ProjetoComponent from '../../componentes/projetoComponente';
import ProjetosSection from '../../componentes/ProjetosSection/ProjetosSection';
import ProjetosSection2 from '../../componentes/ProjetosSection2/ProjetosSection2';
import BannerResponsivo from '../../componentes/BannerResponsivo';
import { FaHeart, FaTimes } from 'react-icons/fa';


function TelaPrincipal() {

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const jaMostrado = sessionStorage.getItem("popupMostrado");

    if (!jaMostrado) {
      setShowPopup(true);
      sessionStorage.setItem("popupMostrado", "true");
    }
  }, []);

  const goToOtherPage = () => {
    setShowPopup(false);
    window.dispatchEvent(new Event('iniciarAOS'));
    navigate("/doacoes");
  };

  const closePopup = () => {
    setShowPopup(false);
    window.dispatchEvent(new Event('iniciarAOS'));
  };

    return (    

    <>

    {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box popup-box-novo">
            <button className="popup-close popup-close-novo" onClick={closePopup} aria-label="Fechar">
              <FaTimes />
            </button>
            <div className="popup-heart-icon">
              <FaHeart />
            </div>
            <h2 className="popup-titulo">Faça a diferença!</h2>
            <p className="popup-desc">Ajude a transformar realidades com a Associação Conexão Social. Cada contribuição conta!</p>
            <button className='popup-button popup-button-novo' onClick={goToOtherPage}>
              <FaHeart style={{ marginRight: '8px' }} />
              Quero Doar
            </button>
            <button className="popup-skip" onClick={closePopup}>Agora não</button>
          </div>
        </div>
      )}

      <Navbar/>   

      <main>               

        {/* <CardTechfest/> */}
        <div data-aos="fade-down" data-aos-duration="1200">
          <CardContratacaoSlide/>
        </div>

        {/* <CardContratacao/> */}

        <div data-aos="fade-right" data-aos-duration="1000">
          <ProjetoComponent />
        </div>

        <div data-aos="fade-left" data-aos-duration="1000">
          <ProjetosSection />
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <ProjetosSection2 />
        </div>

        {/* <MainVideo/> */}

        <div data-aos="zoom-in" data-aos-duration="800">
          <div className='spaceLineNav'></div>
        </div>

        <div data-aos="zoom-in-up" data-aos-duration="1000">
          <NoticiasHome/>
        </div>

        <div data-aos="zoom-in" data-aos-duration="800">
          <div className='spaceLineNav'></div>
        </div>

        {/* <GaleriaHome/> */}

        {/* <div className='spaceLineNav'></div>

        <ProjetosSelecionar/> */}

        <div data-aos="zoom-in" data-aos-duration="800">
          <div className='spaceLineNav'></div>
        </div>

        {/* <OdsSelecionar/>

        <div className='spaceLineNav'></div> */}

        <div data-aos="flip-up" data-aos-duration="1200">
          <BannerResponsivo
            imgDesktop="https://somosconexaosocial.org/site_img/ods/em_jornada_big.png"
            imgMobile="https://somosconexaosocial.org/site_img/ods/em_jornada_pq.png"
            link="https://www.seloodsbrasil.com.br/"
            alt="Selo ODS"
          />
        </div>

        {/* <VideoCarrossel2/> */}

        <div data-aos="fade-up" data-aos-duration="1000">
          <VideoCarrossel/>
        </div>

        {/* <ColaboradorCarrossel/>      */}
        
        <div data-aos="zoom-in" data-aos-duration="1000">
          <Parceiros/>
        </div>

        <div data-aos="flip-down" data-aos-duration="1000">
          <MensagemVisita/>
        </div>

        <div data-aos="zoom-in" data-aos-duration="800">
          <div className='spaceLine'></div>
        </div>

        <div data-aos="fade-right" data-aos-duration="1000">
          <Location/>
        </div>

        <div data-aos="fade-left" data-aos-duration="1000">
          <MainSomosConexao/>           
        </div>

      </main>

      <Footer/> 

    
    </>

  );

};

export default TelaPrincipal;