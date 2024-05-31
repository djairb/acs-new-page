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


const importAll = (r) => r.keys().map(r);

const mainHome = importAll(require.context("../../img/mainHome/main_home", false, /\.(png|jpe?g|svg)$/));

register();

function MainHome() {
    const strings = ["Inovação", "Desenvolvimento", "Cidadania", "Educação", "Inclusão", "Transformação", "Crescimento", "Progresso", "Cuidado", "Colaboração"];
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
                <h1 className='mainSomos'>Somos Conexão <br/> Social para <br/> <span style={{ color: '#FFBF00' }} className={fade ? 'fade-text fontText' : 'fontText'}>{text}</span></h1>
            </div>
            <div className='swiperSlide'>
                <Swiper
                    className='swiperReal'
                    slidesPerView={1}
                    style={{
                        "--swiper-pagination-color": "#72c000",
                        "--swiper-navigation-color": "#72c000",
                    }}
                    effect='fade'
                    grabCursor={true}
                    loop={true}
                    autoplay={{ delay: 2000 }}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {mainHome.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SlideshowLightbox
                                theme="day"
                                fullScreen={true}
                                showControls={true}
                                modalClose="clickOutside"
                                className="swipeImg grid grid-cols-3 gap-2 mx-auto"
                            >
                                <img className="w-full rounded standImg" src={item} />
                            </SlideshowLightbox>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default MainHome;