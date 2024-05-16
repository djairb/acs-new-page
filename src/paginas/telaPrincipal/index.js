import React from "react";

import '../../style/style.css';
import MainHome from "../../componentes/main_home";
import Navbar from "../../componentes/nav";
import Location from "../../componentes/location";
import MainProject from "../../componentes/main_project";



function TelaPrincipal() {

  
 
  return (

    <>   

      <main>

        <Navbar/>


        <MainHome/>

        <div className='spaceLine'></div>

        <MainProject

        reverse="reverse"
        
        
        
        />

        

        <div className='spaceLine'></div>

        <h1>Faça nos uma visita</h1>

        <Location/>

        <div className='spaceLine'></div>       



      </main>

      

    </>

  );

};

export default TelaPrincipal;