import '../../style/style.css';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';

import logoHome from '../../img/logoAcs.png';
import { SlideshowLightbox } from 'lightbox.js-react';

const importAll = (r) => r.keys().map(r);

const mainHome = importAll(require.context("../../img/mainHome/main_home", false, /\.(png|jpe?g|svg)$/));


function QuemSomos() {  

  return (
    
    <>

      <Navbar />

      <main className='mainQuemSomos'>

        <section className='sectionTextImgQuemSomos'>    
            <div className='mainTexto'>

                <h1 className='quemsomosh1'>Quem Somos?</h1>              

                <p>A Associação Conexão Social (ACS) é uma organização da sociedade civil sem fins lucrativos que foi fundada em maio de 2005 no município de Lagoa de Itaenga, na zona da Mata Norte de Pernambuco. A organização possui o objetivo principal de mobilizar a população em busca da garantia dos direitos das pessoas em situação de vulnerabilidade social. Acreditando que a educação é uma poderosa ferramenta para a transformação social, a ACS atende em seus projetos, crianças, adolescentes, jovens, mulheres e idosos.</p>


            </div>

            <div className='swiperSlideQuemSomos'>

                <SlideshowLightbox
                    theme="day"
                    fullScreen={true}
                    showControls={true}
                    modalClose="clickOutside"
                    className="swipeImg grid grid-cols-3 gap-2 mx-auto"
                >
                    <img className="w-full rounded standImg" src={mainHome[0]} />
                </SlideshowLightbox>



            </div>

            

        </section>

        <div className='spaceLine'></div>


      </main>

      <Footer />

    </>
  );
}

export default QuemSomos;
