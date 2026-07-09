import React, { useState } from 'react';
import '../../style/style.css';
import './boletins.css';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';
import { FaCalendarAlt, FaFilePdf, FaBookOpen } from 'react-icons/fa';

import { 
  boletimData2023Inverse, 
  boletimData2024Inverse, 
  boletimData2025Inverse,
  boletimData2026Inverse
} from '../../dados/data-boletim';

function Boletins() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setActiveMonthIndex(0); // Reset to first item
  };

  const boletinsPorAno = {
    '2026': boletimData2026Inverse,
    '2025': boletimData2025Inverse,
    '2024': boletimData2024Inverse,
    '2023': boletimData2023Inverse,
  };

  const selectedData = boletinsPorAno[selectedYear] || [];
  const activeBoletim = selectedData[activeMonthIndex] || null;



  return (
    <>
      <Navbar />

      <main className="bl-page">
        <section className="bl-section">
          
          <div className="bl-section-header">
            <h1 className="bl-titulo-secao">Boletins Informativos</h1>
            <p className="bl-subtitulo-secao">
              Fique por dentro das nossas ações, relatórios de atividades e novidades mensais através dos nossos boletins oficiais.
            </p>
          </div>

          {/* Abas de Anos */}
          <div className="bl-anos-tabs">
            {Object.keys(boletinsPorAno).sort((a, b) => b - a).map((ano) => (
              <button
                key={ano}
                className={`bl-ano-btn ${selectedYear === ano ? 'bl-ano-btn--ativo' : ''}`}
                onClick={() => handleYearChange(ano)}
              >
                <FaCalendarAlt style={{ fontSize: '0.9em' }} />
                <span>Boletins {ano}</span>
              </button>
            ))}
          </div>

          {/* Layout Split-Screen */}
          <div className="bl-layout">
            
            {/* Sidebar esquerda: lista de meses */}
            <div className="bl-months-sidebar">
              {selectedData.map((item, index) => {
                // Extrai a parte depois do hífen se existir, ex: "Junho 2026"
                const monthDisplay = item.title.includes('-') 
                  ? item.title.split('-')[1].trim() 
                  : item.title;

                return (
                  <button
                    key={index}
                    className={`bl-month-card ${activeMonthIndex === index ? 'bl-month-card--active' : ''}`}
                    onClick={() => setActiveMonthIndex(index)}
                  >
                    <div className="bl-month-card-icon">
                      <FaFilePdf />
                    </div>
                    <div className="bl-month-card-info">
                      <h4 className="bl-month-card-title">{monthDisplay}</h4>
                      <p className="bl-month-card-subtitle">Clique para visualizar</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Painel direito: visualizador do boletim ativo */}
            <div className="bl-viewer-pane">
              {activeBoletim ? (
                <>
                  <div className="bl-viewer-header">
                    <div className="bl-viewer-title-area">
                      <FaBookOpen className="bl-viewer-title-icon" />
                      <h2 className="bl-viewer-title">{activeBoletim.title}</h2>
                    </div>
                  </div>

                  <div className="bl-iframe-container">
                    <iframe
                      src={activeBoletim.link}
                      className="bl-viewer-iframe"
                      title={activeBoletim.title}
                      loading="lazy"
                    />
                  </div>
                </>
              ) : (
                <div className="bl-empty-state">
                  <FaFilePdf className="bl-empty-icon" />
                  <h3>Nenhum boletim disponível</h3>
                  <p>Selecione outro ano ou entre em contato para mais informações.</p>
                </div>
              )}
            </div>

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}

export default Boletins;
