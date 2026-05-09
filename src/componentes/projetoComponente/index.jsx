import React, { useState, useEffect, useRef } from 'react';
import logo from "../../img/logoAcs.png";
import { mainHomeVisao } from "../../dados/data-missao";
import { FaPlay, FaHeart, FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import './QuemSomos.css';

/* ─── Estatísticas animadas ─────────────────────────────── */
const STATS = [
  { value: 2005, label: "Fundada em", suffix: "", prefix: "", raw: true, icon: true },
  { value: 20,   label: "Anos de impacto", suffix: "+", prefix: "" },
  { value: 8,    label: "Projetos ativos", suffix: "", prefix: "" },
  { value: 1000, label: "Vidas transformadas", suffix: "+", prefix: "" },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, animate }) {
  const count = useCountUp(stat.value, 1600, animate);
  const display = animate
    ? (stat.raw ? String(count) : count.toLocaleString('pt-BR'))
    : '0';
  return (
    <div className="qs-stat-card">
      {stat.icon && <FaCalendarAlt className="qs-stat-icon" />}
      <span className="qs-stat-number">
        {stat.prefix}{display}{stat.suffix}
      </span>
      <span className="qs-stat-label">{stat.label}</span>
    </div>
  );
}

/* ─── Componente principal ──────────────────────────────── */
const ProjetoComponent = () => {
  const [mostrarValores, setMostrarValores] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="qs-section">

      {/* ── Fundo decorativo ── */}
      <div className="qs-bg-orb qs-orb-1" aria-hidden="true" />
      <div className="qs-bg-orb qs-orb-2" aria-hidden="true" />
      <div className="qs-bg-orb qs-orb-3" aria-hidden="true" />

      <div className="qs-inner">

        {/* ── Coluna esquerda: vídeo polaroid ── */}
        <div className="qs-media-col">
          <div className="qs-video-wrapper">
            <div className="qs-video-frame">
              <iframe
                className="qs-video"
                src="https://www.youtube.com/embed/-eabN_tSE9g?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Vídeo da Associação Conexão Social"
              />
              <div className="qs-video-shine" aria-hidden="true" />
            </div>
            <p className="qs-video-caption qs-video-caption--white">
              <FaPlay className="qs-play-icon" />
              Conheça a Associação Conexão Social
            </p>
          </div>

          {/* Badge flutuante */}
          <div className="qs-badge-local">
            <FaMapMarkerAlt />
            <span>Lagoa do Itaenga, PE</span>
          </div>
        </div>

        {/* ── Coluna direita: texto ── */}
        <div className="qs-text-col">

          <div className="qs-logo-title">
            <img src={logo} alt="Logo ACS" className="qs-logo" />
            <h1 className="qs-title">
              Quem <span className="qs-title-highlight">Somos</span>?
            </h1>
          </div>

          <p className="qs-description">
            A <strong>Associação Conexão Social (ACS)</strong> é uma organização sem fins lucrativos
            fundada em maio de 2005 em Lagoa do Itaenga, na Zona da Mata Norte de Pernambuco.
            Nosso objetivo é mobilizar a população em busca da garantia dos direitos das pessoas
            em situação de vulnerabilidade social — acreditando que a <em>educação é a mais poderosa
            ferramenta de transformação social</em>.
          </p>

          <p className="qs-description">
            Atendemos crianças, adolescentes, jovens, mulheres e idosos por meio de projetos
            inovadores que conectam educação, tecnologia e cidadania.
          </p>

          {/* ── CTA ── */}
          <div className="qs-cta-row">
            <button
              className="qs-btn-primary"
              onClick={() => setMostrarValores(prev => !prev)}
              aria-expanded={mostrarValores}
            >
              <FaHeart style={{ marginRight: 8 }} />
              {mostrarValores ? 'Recolher' : 'Nossa Missão, Visão e Valores'}
            </button>
            <a
              href="https://www.instagram.com/somosconexaosocial/"
              target="_blank"
              rel="noopener noreferrer"
              className="qs-btn-secondary"
            >
              Nos siga no Instagram
            </a>
          </div>
        </div>
      </div>

      {/* ── Estatísticas ── */}
      <div className="qs-stats-row" ref={statsRef}>
        {STATS.map((stat) => (
          <StatCard key={stat.label} stat={stat} animate={statsVisible} />
        ))}
      </div>

      {/* ── Missão / Visão / Valores (tabs) ── */}
      {mostrarValores && (
        <div className="qs-mvv-section">
          <div className="qs-mvv-tabs">
            {mainHomeVisao.map((item, i) => (
              <button
                key={item.id}
                className={`qs-mvv-tab ${activeTab === i ? 'active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {item.titulo}
              </button>
            ))}
          </div>

          <div className="qs-mvv-panel">
            {mainHomeVisao.map((item, i) => (
              <div
                key={item.id}
                className={`qs-mvv-card ${activeTab === i ? 'visible' : 'hidden'}`}
              >
                <div className="qs-mvv-card-img-wrap">
                  <img src={item.imagem} alt={item.titulo} className="qs-mvv-img" />
                  <div className="qs-mvv-img-overlay" />
                  <span className="qs-mvv-img-label">{item.titulo}</span>
                </div>
                <div className="qs-mvv-card-body">
                  <h3 className="qs-mvv-card-title">{item.titulo}</h3>
                  <p className="qs-mvv-card-text">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjetoComponent;