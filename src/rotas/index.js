import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import TelaPrincipal from "../paginas/telaPrincipal";
import Boletins from "../paginas/boletins";
import Transparencia from "../paginas/transparencia";
import Colaboradores from "../paginas/colaboradores";
import QualificacaoRedes from "../paginas/qualificacaoRedes";
import QuemSomos from "../paginas/quemSomos";

const Rotas = () => (
  <HashRouter>
    <Routes>
        
      <Route exact path='/' element={<TelaPrincipal/>} />
      <Route exact path='boletins-informativos' element={<Boletins/>} />
      <Route exact path='transparencia' element={<Transparencia/>} />   
      <Route exact path='colaboradores' element={<Colaboradores/>} />
      <Route exact path='colaboradores' element={<Colaboradores/>} />
      <Route exact path='curso-qualificacao-redes' element={<QualificacaoRedes/>} />
      <Route exact path='quem-somos' element={<QuemSomos/>} />     

    </Routes>
  </HashRouter>
);

export default Rotas;