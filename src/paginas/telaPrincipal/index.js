
import '../../style/style.css';

import Navbar from "../../componentes/nav";
import Location from "../../componentes/location";
import MainHome from "../../componentes/main_home";
import Parceiros from "../../componentes/parceiros";
import Footer from "../../componentes/folter";

import MensagemVisita from "../../componentes/mensagemVisita";
import ProjetosSelecionar from '../../componentes/projetosSelecionar';
import VideoCarrossel from '../../componentes/videoCarrossel';
import InscricaoCard from '../../componentes/inscricaoCard';
import MainHomeVideo from '../../componentes/main_home_video';
import ColaboradorCarrossel from '../../componentes/colaboradorCarrossel';

function TelaPrincipal() {

    return (    

    <>

      <Navbar/>   

      <main>       

        <div className='spaceLineNav'></div>

        <MainHomeVideo/>

        <div className='spaceLineNav'></div>

        <InscricaoCard/>

        <div className='spaceLineNav'></div>

        <ProjetosSelecionar/>

        <div className='spaceLineNav'></div>

        <VideoCarrossel/>

        <ColaboradorCarrossel/>     
        

        <Parceiros/>

        <MensagemVisita/>

        <div className='spaceLine'></div>       

        <Location/>           


      </main>

      <Footer/> 

    
    </>

  );

};

export default TelaPrincipal;