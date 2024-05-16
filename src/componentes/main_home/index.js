import React, { useEffect, useState } from 'react';

import { register } from 'swiper/element/bundle';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';  // Import the fade effect CSS
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// No need to import EffectCoverflow as fade effect doesn't require it

import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';




import { listaFotoHome } from '../../imgBd';

register();
function MainHome() {
    const strings = ["Inovação", "Desenvolvimento", "Cidadania", "Educação", "Inclusão", "Transformação", "Crescimento", "Progresso", "Cuidado", "Colaboração"];
    const [index, setIndex] = useState(0);
    const [text, setText] = useState(strings[0]);
    const [fade, setFade] = useState(false);
    const textColor = '#FFBF00';

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % strings.length);
            setFade(true); // Ativar o efeito de fade quando a palavra muda
        }, 2000); // Tempo de exibição de cada palavra em milissegundos

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setText(strings[index]);
    }, [index]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFade(false); // Desativar o efeito de fade depois de 1 segundo
        }, 2000); // Tempo de duração do efeito de fade

        return () => clearTimeout(timeout);
    }, [text]);

    return (
        <section className='sectionTextImg'>
            <div className='mainTexto'>

                <h1 className='mainSomos'>Somos Conexão Social para <span style={{ color: textColor }} className={fade ? 'fade-text fontText' : 'fontText'}>{text}</span></h1>
                
            </div>         

        <div className='swiperSlide'>

            <Swiper

                className='swiperReal'

                slidesPerView={1}

                style={{

                "--swiper-pagination-color": "#72c000",
                "--swiper-navigation-color": "#72c000",

                }}

                effect={'fade'}  // Set the effect to 'fade'
                grabCursor={true}
                loop={true}  // Maintain loop for continuous fading

                autoplay={{
                delay: 2000
                }}

                pagination={{ clickable: true }}
                navigation
                

                >
                
                {listaFotoHome.map((item) => (

                <SwiperSlide key={item.id}>

                    <SlideshowLightbox
                    fullScreen={true}
                    showControls={true}
                    modalClose="clickOutside"
                    className="swipeImg grid grid-cols-3 gap-2 mx-auto"
                    >

                        <img className="w-full rounded standImg" src={item.imagem} />

                    </SlideshowLightbox>

                </SwiperSlide>

                ))}
            </Swiper>



        </div>       

      

    </section>

    




  );
}

export default MainHome;
