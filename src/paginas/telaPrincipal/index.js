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
  
  const [numeroAlterar, setNumeroAlterar] = useState(0);

  const alterarNumero = () => {

    setNumeroAlterar(numeroAlterar+1);
    
  };

  const alterarProjeto = () => {



  }

  const [nomeProjeto, setNomeProjeto] = useState("Alterar");


  return (


    

    <>

      <Navbar/>   

      <main>       

        <div className='spaceLineNav'></div>

        <MainHome/>

        <h1>{nomeProjeto}</h1>


        <div className="mainPicturesSelected">
            

          {mainHomeData.map((item, key) => (
            
            <img key={key}
            src={item.logoProjeto}
            onClick={() => setNomeProjeto(item.textoProjeto)}
            
            
            />
    

          ))}




        </div>

        

        <div className='spaceLine'></div>

        {/* <h1>{mainHomeData[0].id}</h1> */}


        <>
        
        <button onClick={() => alterarNumero()}>Alterar</button>

        <MainProject
          key={mainHomeData[numeroAlterar].id}
          reverse={mainHomeData[numeroAlterar].reverse}
          textoProjeto={mainHomeData[numeroAlterar].textoProjeto}
          logoProjeto={mainHomeData[numeroAlterar].logoProjeto}
          slideProjeto={mainHomeData[numeroAlterar].slideProjeto}

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