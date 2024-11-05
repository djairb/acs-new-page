import React from "react";

const CardVideo = ({videoUrl, descricaoVideo}) => {
  // Montando o link de incorporação do Google Drive
  return (

    <div className="videoCard">

      <iframe src={videoUrl} allow="autoplay" frameborder="0"></iframe>

      <h3>{descricaoVideo}</h3>

    </div>

  );
};



export default CardVideo;
