import MainProject from "../main_project";

import { odsHomeData, logosOds  } from "../../dados/data-ods";

import React, { useState } from "react";

import '../../style/style.css';
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

                    

                    {odsHomeData[numeroIdProjeto].listaProjetos.map((item, key) => (

                        <div className="projetoOds" key={key}>
                            <img src={item.projetoLogo} alt="Logo do projeto" className="projetoOds-img" />
                            <p className="projetoOds-text">{item.descricao}</p>
                        </div>
                    ))}

                </div>

                

            </div>
                    
          
        </>


    );
}

export default OdsSelecionar;





