import React, { useState } from 'react';
import '../../style/style.css';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';

import bb from "../../img/parceiros/voce-tambem/bb.png";

import pix from "../../img/parceiros/voce-tambem/pix.png";


function Doacoes() {  

  return (
    
    <>
  <div className="telaCompleta">
    <Navbar />

    <main className="mainDoacoes">

      <div className="doacaoDiv">

        <img className='imgDoacao' src={"https://somosconexaosocial.org/site_img/doacao/01.jpg"} alt="Inscrição" />

        <div className='doacaoNomes'>
            <h1>Transforme realidades com a Conexão Social!</h1>

            <p>Apoie nossos projetos que promovem educação, inclusão e desenvolvimento sustentável em comunidades que mais precisam. Sua doação faz a diferença — contribua via transferência bancária, PIX ou cartão de crédito. E mais: até 6% do seu Imposto de Renda pode ser destinado diretamente para nossas ações no momento da entrega da declaração. Faça parte dessa transformação!</p>

            <h3 className="h3SejaParceiro">Seja você também um parceiro:</h3>

                <div className="bbPixParceiro">

                    <div className="bbParceiro">

                        <img src={bb}/>

                        <p>Banco do Brasil <br/> Agência: 2239-X <br/> Conta Corrente: 10432-9</p>

                    

                    </div>

                    <div className="bbParceiro">

                        <img src={pix}/>

                        <p>Pix <br/> 07.599.362/0001-90</p>

                    

                    </div>





                </div>
        </div>





      </div>

    </main>

    <Footer />
  </div>
</>

  );
}

export default Doacoes;
