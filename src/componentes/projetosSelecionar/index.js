import MainProject from "../../componentes/main_project";

import { mainHomeData } from "../../dados/data-projects";

import React, { useState } from "react";

import '../../style/style.css';
function ProjetosSelecionar() {

    const [numeroIdProjeto, setNumeroIdProjeto] = useState(0);

    return (

        <>
            <div className="TextoMaisSelecionarImg">


                <h1 className="h1SectionTitle">Nossos projetos:</h1>

                <div className="mainPicturesSelected">

                    {mainHomeData.map((item, key) => (

                    <img key={key}
                        src={item.logoProjeto}
                        onClick={() => setNumeroIdProjeto(item.id)}
                        className={numeroIdProjeto === item.id ? "selected" : ""}
                    />

                    ))}

                </div>

            </div>

            <MainProject
            
                key={mainHomeData[numeroIdProjeto].id}
                reverse={mainHomeData[numeroIdProjeto].reverse}
                textoProjeto={mainHomeData[numeroIdProjeto].textoProjeto}
                logoProjeto={mainHomeData[numeroIdProjeto].logoProjeto}
                baseUrl={mainHomeData[numeroIdProjeto].baseUrl}

            />

            {/* {mainHomeData.map((item, key) => (

                    <>

                        <MainProject
                        key={key}
                        reverse={item.reverse}
                        textoProjeto={item.textoProjeto}
                        logoProjeto={item.logoProjeto}
                        slideProjeto={item.slideProjeto}

                        />

                        <div className='spaceLine'></div>     
                                
                    </>      

                    ))}   */}
                    
          
        </>


    );
}

export default ProjetosSelecionar;





