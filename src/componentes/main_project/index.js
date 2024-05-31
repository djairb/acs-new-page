import React, { useState } from 'react';

import { register } from 'swiper/element/bundle';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';  // Import the fade effect CSS
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';

register();

//projetosValue pega o index (começando de 0) tanto do array de imagens quanto do array de texto - vai ter q importar geral vey - vai da uma zica da pox

function MainProject(props) {

  return (

    <section className= {'sectionTextImg' + ' ' + props.reverse}>

        <div className='mainTexto'>
   
            <img className='imgLogoProject' src={props.logoProjeto}/>

            <p>{props.textoProjeto}</p> 
                                 

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
                
                {props.slideProjeto.map((item, index) => (
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

export default MainProject;
