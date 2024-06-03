import React from "react";

import '../../style/style.css';
import MainHome from "../../componentes/main_home";
import Navbar from "../../componentes/nav";
import Location from "../../componentes/location";
import MainProject from "../../componentes/main_project";
import Parceiros from "../../componentes/parceiros";
import Footer from "../../componentes/folter";

import { mainHomeData } from "../../dados/data-projects";
import MensagemVisita from "../../componentes/mensagemVisita";

function TelaPrincipal() {  
 
  return (

    <>   

      <main>

        <Navbar/>

        <div className='spaceLineNav'></div>


        <MainHome/>

        <div className='spaceLine'></div>

        {mainHomeData.map((item) => (

          <>

            <MainProject

              reverse={item.reverse}
              textoProjeto={item.textoProjeto}
              logoProjeto={item.logoProjeto}
              slideProjeto={item.slideProjeto}

            />

            <div className='spaceLine'></div>     
                    
          </>      

        ))}  

        <Parceiros/>

        <MensagemVisita/>

        <div className='spaceLine'></div>       

        <Location/>


        <Footer/>       



      </main>

      

    </>

  );

};

export default TelaPrincipal;