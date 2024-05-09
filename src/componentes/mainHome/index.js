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

import imagem01 from "../../img/mainHome/01.png";
import imagem02 from "../../img/mainHome/02.png";


register();

function MainHome() {

  const listaFotoHome = [

    { id: 1, imagem: imagem01 },
    { id: 2, imagem: imagem02 },

  ];


  return (

    <section>

      <Swiper

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
        className="swiperMaster"

      >
        {listaFotoHome.map((item) => (

          <SwiperSlide key={item.id}>

            <SlideshowLightbox
              fullScreen={true}
              showControls={true}
              modalClose="clickOutside"
              className="grid grid-cols-3 gap-2 mx-auto"
            >

              <img className="w-full rounded standImg" src={item.imagem} />

            </SlideshowLightbox>

          </SwiperSlide>

        ))}
      </Swiper>

    </section>




  );
}

export default MainHome;
