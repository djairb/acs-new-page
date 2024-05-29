import bb from "../../img/parceiros/voce-tambem/bb.png";

import pix from "../../img/parceiros/voce-tambem/pix.png";

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../img/parceiros', false, /\.(png|jpe?g|svg)$/));
console.log(images)




function Parceiros(){       
   

    return (
              

        <section className="parceirosSection">

            <div className="parceirosTituloLogo">

                <h1 className="parceirosTitle">Quem está conosco:</h1>
                
                <div className="containerParceiros">
                    

                    {images.map((image, index) => (

                        <img key={index} src={image} alt={`Imagem ${index}`} target="_blank" />

                    ))}
                    
                </div>

                <h1 className="parceirosTitle">Quem já esteve conosco:</h1>
                
                <div className="containerParceiros">
                    

                    {images.map((image, index) => (

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



