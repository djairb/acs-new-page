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

            </div>


            

           


        </section>  

    );

}

export default Parceiros;



