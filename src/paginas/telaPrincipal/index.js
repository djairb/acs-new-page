
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

import ColaboradorCarrossel from '../../componentes/colaboradorCarrossel';
import MainVideo from '../../componentes/main_video';
import MainSomosConexao from '../../componentes/main_somos_conexao';
import NoticiasHome from '../../componentes/noticiasHome/NoticiasHome';


function TelaPrincipal() {

    return (    

    <>

      <Navbar/>   

      <main>       

        <div className='spaceLineNav'></div>

        <MainVideo/>

        <div className='spaceLineNav'></div>

        <NoticiasHome/>

        {/* <InscricaoCard/> */}

        <div className='spaceLineNav'></div>

        <ProjetosSelecionar/>

        <div className='spaceLineNav'></div>

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