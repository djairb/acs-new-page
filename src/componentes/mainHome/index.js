import React, { useState } from 'react';

import { register } from 'swiper/element/bundle'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


import { EffectCoverflow } from 'swiper/modules';

import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox} from 'lightbox.js-react'

import imagem01 from "../../img/mainHome/01.png";
import imagem02 from "../../img/mainHome/02.png";


register();

function MainHome() {

    const listaFotoHome = [

        {id: 1, imagem:imagem01},
        {id: 2, imagem:imagem02}


    ];


    return (

        <section>

            <Swiper

                slidesPerView={1}

                style={{

                    "--swiper-pagination-color": "#72c000",
                    "--swiper-navigation-color": "#72c000",

                }}

                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={2}
                loop={true}

                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true,

                    }
                }
                autoplay={{
                    delay: 2000
                }}
                modules={[EffectCoverflow]}
                pagination={{ clickable: true }}
                navigation
                className="swiperMaster"
                >
                {listaFotoHome.map((item) => (

                    <SwiperSlide key={item.id}>

                        

                        <SlideshowLightbox
                        ///fullsreen true pra imagens muito grandes-
                            fullScreen={true}
                            showControls={true}
                            modalClose="clickOutside"
                            className="grid grid-cols-3 gap-2 mx-auto">

                            <img className="w-full rounded standImg" src={item.imagem}/>

                        </SlideshowLightbox>
                        
                    </SwiperSlide>
                
                ))}
            </Swiper>

            

        </section>




    );
}

export default MainHome;