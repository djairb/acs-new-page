import bb from "../../img/parceiros/voce-tambem/bb.png";

import pix from "../../img/parceiros/voce-tambem/pix.png";

const importAll = (r) => r.keys().map(r);

const quemEsta = importAll(require.context('../../img/parceiros/quem-esta', false, /\.(png|jpe?g|svg)$/));

const quemJaEsteve = importAll(require.context('../../img/parceiros/quem-ja-esteve', false, /\.(png|jpe?g|svg)$/));





function Parceiros(){       
   

    return (
              

        <section className="parceirosSection">

            <div className="parceirosTituloLogo">

                <h1 className="parceirosTitle">Confira nossos parceiros:</h1>
                
                <div className="containerParceiros">
                    

                    {quemEsta.map((image, index) => (

                        <img key={index} src={image} alt={`Imagem ${index}`} target="_blank" />

                    ))}
                    
                </div>

                <h1 className="parceirosTitle">Quem já esteve conosco:</h1>
                
                <div className="containerParceiros">
                    

                    {quemJaEsteve.map((image, index) => (

                        <img key={index} src={image} alt={`Imagem ${index}`} target="_blank" />

                    ))}
                    
                </div>

                <h1 className="parceirosTitle">Seja você também um parceiro:</h1>

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

export default Parceiros;



