import React from "react";

import '../../style/style.css';
import MainHome from "../../componentes/main_home";
import Navbar from "../../componentes/nav";
import Location from "../../componentes/location";



function TelaPrincipal() {

  
 
  return (

    <>   

      <main>

        <Navbar/>

        <MainHome

        reverse="reverse"
        
        
        
        />

        <div className='spaceLine'></div>

        <MainHome/>

        <div className='spaceLine'></div>

        <h1>Conheça nossa sede</h1>

        <Location/>

        <div className='spaceLine'></div>       



      </main>

      

    </>

  );

};

export default TelaPrincipal;