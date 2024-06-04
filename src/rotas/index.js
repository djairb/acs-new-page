import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import TelaPrincipal from "../paginas/telaPrincipal";
import Boletins from "../paginas/boletins";

const Rotas = () => (
  <HashRouter>
    <Routes>
        
      <Route exact path='/' element={<TelaPrincipal/>} />
      <Route exact path='boletins-informativos' element={<Boletins/>} />      

    </Routes>
  </HashRouter>
);

export default Rotas;