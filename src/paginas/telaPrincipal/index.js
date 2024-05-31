import React from "react";

import '../../style/style.css';
import MainHome from "../../componentes/main_home";
import Navbar from "../../componentes/nav";
import Location from "../../componentes/location";
import MainProject from "../../componentes/main_project";
import Parceiros from "../../componentes/parceiros";
import Footer from "../../componentes/folter";

import { mainHomeData } from "../../data-projects";

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
        

        <div className="visitaDiv">

          <h1 className="visitaH1">Faça-nos uma visita</h1>

          <p className="visitaP">Centro Tecnológico de Inclusão Digital e Social - Rua Projetada A, sem número, Bairro Salinas - Lagoa de Itaenga/PE <br/> Telefone:
            (081) - 3653 - 2272 <br/> E-mail: <a
              href="mailto:administrativo@aconexaosocial.org">administrativo@aconexaosocial.org</a>
          </p>


        </div>        

        <Location/>


        <Footer/>       



      </main>

      

    </>

  );

};

export default TelaPrincipal;