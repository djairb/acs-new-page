
import '../../style/style.css';

import Navbar from "../../componentes/nav";
import Location from "../../componentes/location";
import MainHome from "../../componentes/main_home";
import Parceiros from "../../componentes/parceiros";
import Footer from "../../componentes/folter";

import MensagemVisita from "../../componentes/mensagemVisita";
import ProjetosSelecionar from '../../componentes/projetosSelecionar';

function TelaPrincipal() {

    return (    

    <>

      <Navbar/>   

      <main>       

        <div className='spaceLineNav'></div>

        <MainHome/>

        <div className='spaceLineNav'></div>

        <ProjetosSelecionar/>

        <div className='spaceLineNav'></div>           


        

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