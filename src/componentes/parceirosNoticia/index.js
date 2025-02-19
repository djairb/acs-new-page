import bb from "../../img/parceiros/voce-tambem/bb.png";

import pix from "../../img/parceiros/voce-tambem/pix.png";

import { quemEsta, quemEstaLink } from "../parceiros";


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



