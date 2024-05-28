import React, { useState } from 'react';

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

function MainProject(props) {

  return (

    <section className= {'sectionTextImg' + ' ' + props.reverse}>

        <div className='mainTexto'>


            <h1>Lorem Ipsum</h1>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>



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
                    theme="day"
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

export default MainProject;
