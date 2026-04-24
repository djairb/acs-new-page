
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
    navigate("/doacoes");
  };

  const closePopup = () => {
    setShowPopup(false);
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
        <CardContratacaoSlide/>

        {/* <CardContratacao/> */}

        <ProjetoComponent />

        <ProjetosSection />

        <ProjetosSection2 />

        {/* <MainVideo/> */}

        <div className='spaceLineNav'></div>

        <NoticiasHome/>


        <div className='spaceLineNav'></div>

        {/* <GaleriaHome/> */}

        {/* <div className='spaceLineNav'></div>

        <ProjetosSelecionar/> */}

        <div className='spaceLineNav'></div>

        {/* <OdsSelecionar/>

        <div className='spaceLineNav'></div> */}

          <BannerResponsivo
            imgDesktop="https://somosconexaosocial.org/site_img/ods/em_jornada_big.png"
            imgMobile="https://somosconexaosocial.org/site_img/ods/em_jornada_pq.png"
            link="https://www.seloodsbrasil.com.br/"
            alt="Selo ODS"
          />

        {/* <VideoCarrossel2/> */}

        <VideoCarrossel/>

        {/* <ColaboradorCarrossel/>      */}
        
        <Parceiros/>

        <MensagemVisita/>

        <div className='spaceLine'></div>

        <Location/>

        <MainSomosConexao/>           


      </main>

      <Footer/> 

    
    </>

  );

};

export default TelaPrincipal;