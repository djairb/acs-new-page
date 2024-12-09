import '../../style/style.css';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';

import logoHome from '../../img/logoAcs.png';
import { SlideshowLightbox } from 'lightbox.js-react';

import { mainQuemSomos} from "../../dados/data-quemsomos";




function QuemSomos() {  

  return (
    
    <>

      <Navbar />

      <main className='mainQuemSomos'>

              {mainQuemSomos.map((item, key) => (

                <>

                <div className={'sectionTextImgQuemSomos' + ' ' + item.reverse}>
                      <div className='mainTexto'>

                          <h1 className='quemsomosh1'>{item.titulo}</h1>

                          <p>{item.slideProjeto}</p>


                      </div>

                      <div className='swiperSlideQuemSomos'>

                          <SlideshowLightbox
                              theme="day"
                              fullScreen={true}
                              showControls={true}
                              modalClose="clickOutside"
                              className="swipeImg grid grid-cols-3 gap-2 mx-auto"
                          >
                              <img className="w-full rounded standImg" src={item.imagem} />
                          </SlideshowLightbox>

                      </div>



                  </div>

                  <div className='spaceLine'></div>
                
                </>

                  
                  
                  

                  

                  

              ))}



      </main>

      <Footer />

    </>
  );
}

export default QuemSomos;
