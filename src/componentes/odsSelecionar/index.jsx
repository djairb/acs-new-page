import MainProject from "../main_project";

import { odsHomeData, logosOds  } from "../../dados/data-ods";

import React, { useState } from "react";

import '../../style/style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
function OdsSelecionar() {

    const [numeroIdProjeto, setNumeroIdProjeto] = useState(0);

    return (

        <>
            <div className="TextoMaisSelecionarImgOds">

                <h1 className="h1SectionTitle">Objetivos de Desenvolvimento Sustentável - ACS</h1>

                <div className="mainPicturesSelectedOds">

                    {odsHomeData.map((item, key) => (

                    <img key={key}
                        src={item.logoOds}
                        onClick={() => setNumeroIdProjeto(item.id)}
                        className={numeroIdProjeto === item.id ? "selected" : ""}
                    />

                    ))}

                </div>

                <div className="projectDetailsOds">

                    <img

                        src={odsHomeData[numeroIdProjeto].logoOds}

                    />

                    <p className="pOds">Estes são os projetos que contribuem para este Objetivo de Desenvolvimento Sustentável: </p>

                    <Swiper
                        slidesPerView={1} // Ajuste este valor para o número desejado de vídeos por vez
                        spaceBetween={5} // Espaçamento entre os slides (em pixels)
                        style={{
                            "--swiper-pagination-color": "#f08528",
                            "--swiper-navigation-color": "#f08528",
                        }}
                        grabCursor={true}
                        loop={true}
                        autoplay={true}

                        navigation

                        className="swiperClass"

                    >
                        {odsHomeData[numeroIdProjeto].listaProjetos.map((item, key) => (

                            <SwiperSlide key={key} >

                                <div className="projetoOds" key={key}>
                                    <img src={item.projetoLogo} alt="Logo do projeto" className="projetoOds-img" />
                                    <p className="projetoOds-text">{item.descricao}</p>
                                </div>

                            </SwiperSlide>


                        ))}



                    </Swiper>



                </div>

                

            </div>
                    
          
        </>


    );
}

export default OdsSelecionar;





