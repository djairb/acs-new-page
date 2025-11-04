import React from 'react';
import { mainHomeVisao } from "../../dados/data-missao";


const MissaoVisaoValores = ({ mostrar }) => {
  if (!mostrar) return null;

  return (
    <section className="missao-visao-valores-section">
      <div className="missao-visao-valores-container">
        {mainHomeVisao.map(item => (
          <div key={item.id} className="valor-item">
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
            <img src={item.imagem} alt={item.titulo} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissaoVisaoValores;