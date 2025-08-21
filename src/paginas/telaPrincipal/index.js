
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
          <div className="popup-box">
            <button className="popup-close" onClick={closePopup}>
              ✖
            </button>
            <h2>Bem-vindo!</h2>
            <p>Ajude a transformar realidades com a Conexão Social!</p>
            <button className='popup-button' onClick={goToOtherPage}>Doar</button>
          </div>
        </div>
      )}

      <Navbar/>   

      <main>       

        

        {/* <CardTechfest/> */}
        <CardContratacao/>

        

        <MainVideo/>

        <div className='spaceLineNav'></div>

        <NoticiasHome/>


        <div className='spaceLineNav'></div>

        <GaleriaHome/>

        <div className='spaceLineNav'></div>

        <ProjetosSelecionar/>

        <div className='spaceLineNav'></div>

        <OdsSelecionar/>

        <div className='spaceLineNav'></div>

        <VideoCarrossel2/>

        {/* <VideoCarrossel/> */}

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