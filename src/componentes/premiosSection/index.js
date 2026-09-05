import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './premiosSection.css';
import { premiosTimeline } from '../../dados/data-premios';

function PremiosSection() {
  const [ativo, setAtivo] = useState(premiosTimeline.length - 1);
  const timelineRef = useRef(null);
  const item = premiosTimeline[ativo];

  const rolarTimeline = (direcao) => {
    if (!timelineRef.current) return;
    timelineRef.current.scrollBy({ left: direcao * 320, behavior: 'smooth' });
  };

  return (
    <section className="pr-section">
      <div className="pr-hero">
        <div className="pr-hero-texto">
          <h1 className="pr-titulo">Prêmios e Reconhecimentos</h1>
          <p className="pr-intro">
            Ao longo de mais de 20 anos de atuação, a Associação Conexão Social tem recebido
            homenagens de câmaras municipais, assembleias legislativas e instituições parceiras.
            Cada reconhecimento marca uma etapa do trabalho realizado ao lado das comunidades
            atendidas, nas áreas de cidadania, educação, direitos humanos e inclusão social.
          </p>
        </div>

        <div className="pr-hero-visual">
          <img src={item.imagem} alt={item.titulo} className="pr-hero-img" key={item.id} />

          <div className="pr-hero-caption">
            <span className="pr-caption-ano">{item.ano}</span>
            <h2 className="pr-caption-titulo">{item.titulo}</h2>
            <span className="pr-caption-instituicao">{item.instituicao}</span>
            <p className="pr-caption-descricao">{item.descricao}</p>
          </div>
        </div>
      </div>

      <div className="pr-timeline-section">
        <h3 className="pr-timeline-titulo-secao">Linha do Tempo de Conquistas</h3>

        <div className="pr-timeline-wrapper">
          <button
            type="button"
            className="pr-timeline-arrow pr-timeline-arrow--esquerda"
            onClick={() => rolarTimeline(-1)}
            aria-label="Ver conquistas anteriores"
          >
            <FaChevronLeft />
          </button>

          <div className="pr-timeline" ref={timelineRef}>
            <div className="pr-timeline-linha" aria-hidden="true"></div>

            {premiosTimeline.map((p, index) => (
              <button
                key={p.id}
                type="button"
                className={`pr-timeline-item ${index === ativo ? 'pr-timeline-item--ativo' : ''}`}
                onClick={() => setAtivo(index)}
              >
                <span className="pr-timeline-ano">{p.ano}</span>
                <span className="pr-timeline-ponto"></span>
                <div className="pr-timeline-thumb">
                  <img src={p.imagem} alt={p.titulo} />
                </div>
                <span className="pr-timeline-item-titulo">{p.titulo}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            className="pr-timeline-arrow pr-timeline-arrow--direita"
            onClick={() => rolarTimeline(1)}
            aria-label="Ver próximas conquistas"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PremiosSection;
