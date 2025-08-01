import bb from "../../img/parceiros/voce-tambem/bb.png";

import pix from "../../img/parceiros/voce-tambem/pix.png";

const importAll = (r) => r.keys().map(r);

export const quemEsta = importAll(require.context('../../img/parceiros/quem-esta', false, /\.(png|jpe?g|svg)$/));

const quemJaEsteve = importAll(require.context('../../img/parceiros/quem-ja-esteve', false, /\.(png|jpe?g|svg)$/));

export const quemEstaLink = [

    "https://www.bb.com.br/site/",
    "https://nubank.com.br/",
    "https://www.daycoval.com.br/",
    "https://www.pe.gov.br/secretaria/secretaria-da-mulher/",
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
    "https://www.santander.com.br/sustentabilidade/sociedade/parceiro-do-idoso",
    "https://www.caixa.gov.br/",
    "https://www.vwfs.com.br/",
    "https://www.everllence.com/",
    "https://www.bbseguros.com.br/",
    "https://rems.org.br/",
    "https://www.instagram.com/bs.sport.management.ltda/",
    "https://itaenga.pe.gov.br/",
    "",
    "",    
    "",
    "",
    ""
    

]

const quemJaEsteveLink = [

    "https://www.bayer.com.br/pt/",
    "https://www.lojas2001.com.br/",
    "https://www.autobelochevrolet.com.br/",
    "https://www.cese.org.br/",
    "https://www.cedca.pe.gov.br/",
    "https://www.sas.pe.gov.br/",
    "https://www.itausocial.org.br/",
    ""
]


function Parceiros(){      

    return (
              

        <section className="parceirosSection">

            <div className="parceirosTituloLogo">

                <details>
                    <summary>Parceria</summary>
                    <p>Para realizarmos nosso trabalho e cumprirmos nossa missão de atender crianças, adolescentes, jovens, mulheres e pessoas idosas, buscamos capacitar e formar uma sociedade mais justa e igualitária, sempre respeitando os valores humanos. Para que isso aconteça, precisamos do apoio de todos, superando os desafios que surgem com cada participante. <br/> Articulamos parcerias importantes, fortalecendo nosso território, garantindo direitos e alinhando nossas ações ao planejamento estratégico. Assim, buscamos programas e projetos incentivados, firmamos parcerias com outras organizações e promovemos a assistência às famílias, aos movimentos sociais e a outras entidades da sociedade civil.</p>
                </details>

                <h1 className="h1SectionTitle">Esses são nossos parceiros:</h1>
                
                <div className="containerParceiros">                    

                    {quemEsta.map((image, index) => (
                        
                        <a href={quemEstaLink[index]} target="_blank">

                            <img key={index} src={image} alt={`Imagem ${index}`} target="_blank" />                   
                        
                        </a>
                        
                    ))}
                    
                </div>

                <h1 className="h1SectionTitle">Quem já esteve conosco:</h1>
                
                <div className="containerParceiros">
                    

                    {quemJaEsteve.map((image, index) => (

                        <a href={quemJaEsteveLink[index]} target="_blank">

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

export default Parceiros;



