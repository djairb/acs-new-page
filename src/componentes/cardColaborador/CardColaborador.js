import React from "react";

import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';

export default function CardColaborador(props) {  


    return (

        <>

            <div className="containerCardColaborador">

                <SlideshowLightbox
                    theme="day"
                    fullScreen={true}
                    showControls={true}
                    modalClose="clickOutside"
                    className="swipeImg grid grid-cols-3 gap-2 mx-auto"
                    >
                        <img className="w-full rounded"src={props.foto} />
    

                </SlideshowLightbox>

                

                <div className="colaboradorInfo">

                    <h1>{props.nome}</h1>

                    <div className="linhaColaborador"></div>

                    <h2>{props.funcao}</h2>  


                </div>

                          
                

            </div>

        </>


    )




}