
import '../../style/style.css';

import Navbar from "../../componentes/nav";
import Location from "../../componentes/location";

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


function TelaPrincipal() {

    return (    

    <>

      <Navbar/>   

      <main>       

        

        <CardTechfest/>

        <div className='spaceLineNav'></div>

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