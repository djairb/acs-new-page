import React, { useState } from "react";

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

  
  const [numeroIdProjeto, setNumeroIdProjeto] = useState(0); 

    return (    

    <>

      <Navbar/>   

      <main>       

        <div className='spaceLineNav'></div>

        <MainHome/>

        <div className='spaceLineNav'></div>


        <div className="TextoMaisSelecionarImg">


          <h2>Nossos projetos:</h2>

          <div className="mainPicturesSelected">


            {mainHomeData.map((item, key) => (

              <img key={key}
                src={item.logoProjeto}
                onClick={() => setNumeroIdProjeto(item.id)}
                className={numeroIdProjeto === item.id ? "selected" : ""}


              />


            ))}

          </div>

        </div>
        

        <>
        

          <MainProject
            key={mainHomeData[numeroIdProjeto].id}
            reverse={mainHomeData[numeroIdProjeto].reverse}
            textoProjeto={mainHomeData[numeroIdProjeto].textoProjeto}
            logoProjeto={mainHomeData[numeroIdProjeto].logoProjeto}
            slideProjeto={mainHomeData[numeroIdProjeto].slideProjeto}

          />

                 
                    
        </>   









        {/* {mainHomeData.map((item, key) => (

          <>

            <MainProject
              key={key}
              reverse={item.reverse}
              textoProjeto={item.textoProjeto}
              logoProjeto={item.logoProjeto}
              slideProjeto={item.slideProjeto}

            />

            <div className='spaceLine'></div>     
                    
          </>      

        ))}   */}

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