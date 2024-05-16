import React, { useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import { listaFotoHome } from '../../imgBd';

register();

function MainHome() {
    const strings = ["Inovação", "Desenvolvimento", "Cidadania", "Educação", "Inclusão", "Transformação", "Crescimento", "Progresso", "Cuidado", "Colaboração"];
    const [index, setIndex] = useState(0);
    const [text, setText] = useState(strings[0]);
    const [fade, setFade] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

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

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % listaFotoHome.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className='sectionTextImg'>
            <div className='mainTexto'>
                <h1 className='mainSomos'>Somos Conexão Social para <br/> <span style={{ color: '#FFBF00' }} className={fade ? 'fade-text fontText' : 'fontText'}>{text}</span></h1>
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
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {listaFotoHome.map((item, index) => (
                        <SwiperSlide key={index}>
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
