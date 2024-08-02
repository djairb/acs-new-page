import React from "react";

export default function CardColaborador(props) {  


    return (

        <>

            <div className="containerCardColaborador">

                <img src={props.foto} />

                

                <h1>{props.nome}</h1>

                <h2>{props.funcao}</h2>            
                

            </div>

        </>


    )




}