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

        <MainHome/>

        <div className='spaceLine'></div>

        <MainHome/>

        <div className='spaceLine'></div>

        <Location/>
        
        <div className='spaceLine'></div>       



      </main>

      

    </>

  );

};

export default TelaPrincipal;