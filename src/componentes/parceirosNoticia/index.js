import bb from "../../img/parceiros/voce-tambem/bb.png";

import pix from "../../img/parceiros/voce-tambem/pix.png";

const importAll = (r) => r.keys().map(r);

const quemEsta = importAll(require.context('../../img/parceiros/quem-esta', false, /\.(png|jpe?g|svg)$/));

const quemEstaLink = [

    "https://www.bb.com.br/site/",
    "https://nubank.com.br/",
    "https://www.daycoval.com.br/",
    "https://www.pe.gov.br/",
    "https://portal.educacao.pe.gov.br/",
    "https://jsl.com.br/",
    "https://www.cantustore.com.br/",
    "https://www.elecnor.com.br/",
    "https://www.brasilcap.com.br/",
    "https://www.copaenergia.com.br/",
    "https://www.edenred.com.br/",
    "https://www.laureus.com/sport-for-good",
    "https://www.nike.com.br/",
    "https://www.b3.com.br/",
    "https://www.santander.com.br/",
    "https://www.caixa.gov.br/",
    "https://www.bbseguros.com.br/",
    "https://rems.org.br/",
    "",
    "",
    "https://itaenga.pe.gov.br/",    
    "",
    "",
    ""
    

]



function ParceirosNoticia(){      

    return (
              

        <section className="parceirosSection sectionNoticias">

            <div className="parceirosTituloLogo">

                <h1 className="h1SectionTitle">Ações como esta só são possíveis graças a nosso parceiros:</h1>
                
                <div className="containerParceiros">                    

                    {quemEsta.map((image, index) => (
                        
                        <a href={quemEstaLink[index]} target="_blank">

                            <img key={index} src={image} alt={`Imagem ${index}`} target="_blank" />                   
                        
                        </a>
                        
                    ))}
                    
                </div>

                <h1 className="h1SectionTitle">Seja você também um parceiro:</h1>

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
           


        </section>  

    );

}

export default ParceirosNoticia;



