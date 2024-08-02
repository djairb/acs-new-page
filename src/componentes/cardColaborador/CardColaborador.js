import React from "react";

import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';

export default function CardColaborador(props) {  


    return (

        <>

            <div className="containerCardColaborador">

                <img src={props.foto} />

                <div className="colaboradorInfo">

                    <h1>{props.nome}</h1>

                    <div className="linhaColaborador"></div>

                    <h2>{props.funcao}</h2>  


                </div>

                          
                

            </div>

        </>


    )




}