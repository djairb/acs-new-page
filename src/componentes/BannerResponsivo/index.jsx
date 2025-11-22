import React from 'react';
import './BannerResponsivo.css';

const BannerResponsivo = ({ imgDesktop, imgMobile, link, alt }) => {
  return (
    <div className="banner-full-width">
      <a href={link} className="banner-link">
        
        {/* A tag PICTURE faz a mágica da troca automática */}
        <picture>
          {/* Se a tela for menor que 768px (Mobile/Tablet vertical), usa essa: */}
          <source media="(max-width: 768px)" srcSet={imgMobile} />
          
          {/* Caso contrário (Desktop), usa essa aqui: */}
          <img 
            src={imgDesktop} 
            alt={alt || "Banner Promocional"} 
            className="banner-img" 
          />
        </picture>

      </a>
    </div>
  );
};

export default BannerResponsivo;