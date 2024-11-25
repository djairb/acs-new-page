import React, { useEffect, useState } from 'react';
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import logoHome from '../../img/logoAcs.png';

import facebook from "../../img/mainHome/mainHomeSociais/fb.png";
import instagram from "../../img/mainHome/mainHomeSociais/ig.png";
import youtube from "../../img/mainHome/mainHomeSociais/yt.png";


const importAll = (r) => r.keys().map(r);

const mainHome = importAll(require.context("../../img/mainHome/main_home", false, /\.(png|jpe?g|svg)$/));

register();

function MainHomeVideo() {
    const strings = ["Inovação", "Desenvolvimento", "Cidadania", "Educação", "Inclusão", "Transformação", "Crescimento", "Progresso", "Cuidado", "Colaboração", "Capacitação"];
    const [index, setIndex] = useState(0);
    const [text, setText] = useState(strings[0]);
    const [fade, setFade] = useState(false);
   

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % strings.length);
            setFade(true);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setText(strings[index]);
        const timeout = setTimeout(() => {
            setFade(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [index]);

    

    return (
        <section className='sectionTextImg'>
            <div className='mainTexto'>                

                <SlideshowLightbox
                    theme="day"
                    fullScreen={true}
                    showControls={true}
                    modalClose="clickOutside"                 
                    className="swipeImg grid grid-cols-3 gap-2 mx-auto"
                >
                    <img className="w-full rounded" src={logoHome} />
                </SlideshowLightbox>

                <div id="sociais" className="container-sociais">
                    <a href="https://www.facebook.com/conexsoc">
                        <img src={facebook} />
                    </a>
                    <a href="https://www.instagram.com/somosconexaosocial/">
                        <img src={instagram} />
                    </a>
                    <a href="https://www.youtube.com/@SomosConexaoSocial">
                        <img src={youtube} />
                    </a>
                </div>                

                <h1 className='mainSomos'>Somos Conexão Social para <br/> <span className={fade ? 'fade-text fontText' : 'fontText'}>{text}</span></h1>

                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/4ueL6Zz6KCg?autoplay=1&mute=1&loop=1&playlist=4ueL6Zz6KCg"
                        title="Conheça a Associação Conexão Social"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>

                

                
            </div>

            
            
        </section>
    );
}

export default MainHomeVideo;