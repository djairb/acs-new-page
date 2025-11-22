import React from 'react';
import './CardSimples.css';

const CardSimples = ({ data }) => {
  // Desestruturando exatamente os campos da sua lista 'destaquesOuParcerias'
  const { imagem, logo, titulo, descricao, link, textoLink } = data;

  return (
    <div className="card-simples">
      {/* Imagem Principal (String única) */}
      <div className="card-simples-img-container">
        <img src={imagem} alt={titulo} />
      </div>

      <div className="card-simples-body">
        {/* Cabeçalho com Título e Logo */}
        <div className="card-simples-header">
          <h3>{titulo}</h3>
          
          {/* Logo só aparece se existir no objeto */}
          {logo && (
            <img src={logo} alt="Logo" className="card-simples-logo" />
          )}
        </div>

        {/* Descrição direta */}
        <p>{descricao}</p>
        
        {/* Botão Opcional */}
        {link && (
          <a href={link} className="card-simples-btn">
            {textoLink || 'Saiba mais'} &rarr;
          </a>
        )}
      </div>
    </div>
  );
};

export default CardSimples;