import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import TelaPrincipal from "../paginas/telaPrincipal";
import Boletins from "../paginas/boletins";
import Transparencia from "../paginas/transparencia";
import Colaboradores from "../paginas/colaboradores";
import QualificacaoRedes from "../paginas/qualificacaoRedes";
import QuemSomos from "../paginas/quemSomos";
import Noticia from "../paginas/noticia";
import TodasNoticias from "../paginas/todasNoticias";
import GaleriaImagens from "../paginas/galeria";
import PaginaRebeca from "../paginas/paginaRebeca";
import Doacoes from "../paginas/doacoes";
import Diretoria from "../paginas/diretoria";

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

      <Route exact path='noticias' element={<TodasNoticias/>} />

      <Route exact path='blog-rebeca' element={<PaginaRebeca/>} />

      <Route exact path='galeria' element={<GaleriaImagens/>} />

      <Route exact path='doacoes' element={<Doacoes/>} />

      <Route exact path='diretoria' element={<Diretoria/>} />
      


      <Route path="/noticias/:slug" element={<Noticia />} />     

    </Routes>
  </HashRouter>
);

export default Rotas;