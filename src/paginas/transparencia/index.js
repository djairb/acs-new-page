import React, { useState } from 'react';
import '../../style/style.css';
import './transparencia.css';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';

const diretoria = [
  {
    nome: 'Iaura Lima',
    cargo: 'Diretora Institucional',
    foto: 'https://somosconexaosocial.org/site_img/transparencia/iaura_lima.jpg',
  },
  {
    nome: 'Vitória Silva de Oliveira',
    cargo: 'Diretora Financeira',
    foto: 'https://somosconexaosocial.org/site_img/transparencia/vitoria_silva.jpeg',
  },
  {
    nome: 'Erlane Maria Bezerra',
    cargo: 'Diretora Secretária',
    foto: 'https://somosconexaosocial.org/site_img/transparencia/erlane_maria.jpg',
  },
];

const conselhoFiscal = [
  { nome: 'Ione Severina da Silva', foto: 'https://somosconexaosocial.org/site_img/transparencia/ione_severina.jpeg' },
  { nome: 'Helionelys Barbosa', foto: 'https://somosconexaosocial.org/site_img/transparencia/helionelys_barbosa.jpeg' },
  { nome: 'Andreis Victor', foto: 'https://somosconexaosocial.org/site_img/transparencia/andreis_victor.jpeg' },
  { nome: 'Marcio Rodolfo', foto: 'https://somosconexaosocial.org/site_img/transparencia/marcio_rodolfo.jpeg' },,
  { nome: 'Leidiane França', foto: 'https://somosconexaosocial.org/site_img/transparencia/leidiane_franca.jpeg' },
  { nome: 'Beatriz Sandra', foto: 'https://somosconexaosocial.org/site_img/transparencia/beatriz_sandra.jpg' }
  ,
];

const documentosPorAno = {
  2026: {
    'Termos de Fomento': [
      { titulo: 'TERMO DE FOMENTO 66/2026 - SECRETARIA DA MULHER - ESTADO DE PERNAMBUCO', link: 'https://drive.google.com/file/d/1QFeoNcoWV3_nogtutHGikqGtvFVDoGZx/view?usp=sharing' },
    ],
  },
  2025: {

    'Relatório': [
      { titulo: 'Relatório Anual de Impacto 2025', link: 'https://drive.google.com/file/d/1vVTAYStv8PbT1Ke1noygA2Rj0cP3ezT7/view?usp=sharing' },
    ],
    'Termos de Fomento': [
      { titulo: '1° TA - TERMO DE FOMENTO 006/2024', link: 'https://drive.google.com/file/d/1EtkTN0D9CUyWLXoVkukoEW0PU5KSXFwn/view?usp=sharing' },
      { titulo: 'TERMO DE FOMENTO N 004-2025', link: 'https://drive.google.com/file/d/1QoDylPQ3JEHqOY77lpD5J9opIA5XQQaZ/view?usp=sharing' },
      { titulo: 'TERMO DE FOMENTO N 009-2025', link: 'https://drive.google.com/file/d/1VCRWG5O22GjNcsqbpWt4fr1wTeYr2NLU/view?usp=sharing' },
    ],
    'Planos e Planejamentos': [
      { titulo: 'PLANO DE CAPTAÇÃO DE RECURSOS', link: 'https://drive.google.com/file/d/1rg2DA3YEt3fDJw5nZ5dex3r-w0xn59td/view?usp=sharing' },
      { titulo: 'PLANO OPERACIONAL ANUAL - POA/2025', link: 'https://drive.google.com/file/d/1C49J0njGEiV4scfG53RaWvB4BHr-ZBbQ/view?usp=sharing' },
      { titulo: 'PLANEJAMENTO ESTRATÉGICO E PLANO DE AÇÃO UTILIZADO EM 2025', link: 'https://drive.google.com/file/d/1U1Ud2oOFH1Kz8BFNiS75tEknozHzFVL9/view?usp=sharing' },
      { titulo: 'PLANO ESTRATÉGICO DE COMUNICAÇÃO', link: 'https://drive.google.com/file/d/1bQqIlDw4zkGabDfXYrWzOIKbuk1PNTXE/view?usp=sharing' },
    ],
    'Políticas e Regulamentos': [
      { titulo: 'POLÍTICA DE GUARDIÕES DOS DIREITOS DA PESSOA IDOSA', link: 'https://drive.google.com/file/d/1_6BZcxUtsoEytlWb-JXH0iV5TRAZT7Et/view?usp=sharing' },
      { titulo: 'CÓDIGO DE ÉTICA E CONDUTA', link: 'https://drive.google.com/file/d/1_Km9g0wVQ_O734elQUBYzdqXrCusMZK5/view?usp=sharing' },
      { titulo: 'COMISSÃO PERMANENTE DE COMPRAS - 2025', link: 'https://drive.google.com/file/d/1XV9zAfDSRiPCmbmdrAhYZOmQ834qfS8p/view?usp=sharing' },
      { titulo: 'POLÍTICA DE SALVAGUARDA - 2025', link: 'https://drive.google.com/file/d/1jyBZr6cQvxtjhsehnCRt8Afo7ZtKqJOW/view?usp=sharing' },
    ],
    'Cartilhas e Publicações': [
      { titulo: 'CARTILHA CONECTA VIDAS - Vol. 01', link: 'https://drive.google.com/file/d/1b4ooWZKJTcD0ne3EaGJMIfcRW6mIHeZT/view?usp=sharing' },
    ],
    'Editais': [
      { titulo: 'EDITAL DE SELEÇÃO SIMPLIFICADA CHAMADA N 001-2025', link: 'https://drive.google.com/file/d/1V7haPwJ1huychyRuSJEj4rIX4naJGpeS/view?usp=sharing' },
    ],
    'Notas Técnicas': [
      { titulo: 'NOTA TÉCNICA - SEE - Gerência Geral de Assuntos Jurídicos - Nº 13832025', link: 'https://drive.google.com/file/d/1fSscB0xDdqcFRuWlMXlA0yzHCs6Ibxyz/view?usp=sharing' },
    ],
  },
  2024: {
    'Relatórios': [
      { titulo: 'RELATÓRIO ANUAL DE IMPACTO 2024', link: 'https://drive.google.com/file/d/1oEoZFEJoOKJrTkl_GmsU7DK9i29hjIO1/view?usp=sharing' },
    ],
    'Financeiro': [
      { titulo: 'BALANCETE 2024', link: 'https://drive.google.com/file/d/12oOHysq9BkZ29unW3_I4qamhNvCdX_GH/view?usp=sharing' },
    ],
    'Termos de Convênio': [
      { titulo: 'TERMO DE CONVÊNIO - PROJETO OPORTUNIZAR COMUNIDADE URBANO', link: 'https://drive.google.com/file/d/1J0NJWMaYmGw-0JBwuNG0wmEhKYD3YHA_/view?usp=sharing' },
    ],
    'Termos de Fomento': [
      { titulo: 'TERMO DE FOMENTO - N° 023 - 2024', link: 'https://drive.google.com/file/d/1pGmAdXpbaEnILCjYhW5Xs-Cut2g29hNn/view?usp=sharing' },
      { titulo: 'TERMO DE FOMENTO - N° 003 - 2024', link: 'https://drive.google.com/file/d/1mTX0UbMRJsrvar8FkOoQ3SqdrF2S0orb/view?usp=sharing' },
      { titulo: 'TERMO DE FOMENTO - N° 005 - 2024', link: 'https://drive.google.com/file/d/1I-NlMv1qLUmt_yEC33nhCZeWtRkgV-ax/view?usp=sharing' },
      { titulo: 'TERMO DE FOMENTO - N° 009 - 2024', link: 'https://drive.google.com/file/d/1H_XUtHJvKhOrqBIgEwXWWvCW9NGYBhnK/view?usp=sharing' },
      { titulo: 'TERMO DE FOMENTO 006-2024', link: 'https://drive.google.com/file/d/1f62vhhLa-eANMVZnWVozVDVJwUY9NXO_/view?usp=sharing' },
    ],
  },
  2023: {
    'Relatórios': [
      { titulo: 'RELATÓRIO DE IMPACTO - 2023', link: 'https://drive.google.com/file/d/1M9mryRTMrsadPsUj47MEj9adEeUSJMKG/view?usp=sharing' },
    ],
    'Financeiro': [
      { titulo: 'BALANÇO - 2023', link: 'https://drive.google.com/file/d/1ond-hF-7ZDgfbSkWrSMCyHcNz8d-lnEb/view?usp=sharing' },
    ],
    'Termos de Fomento': [
      { titulo: 'TERMO DE FOMENTO N 002-2023', link: 'https://drive.google.com/file/d/17HGINeyr4DVDyGHbq7yE96oxsOUIqEYj/view?usp=sharing' },
      { titulo: 'TERMO DE FOMENTO N 007-2023', link: 'https://drive.google.com/file/d/1HQ2QMto9GxKvTb5jCD6k8Vg13Y0ntHBc/view?usp=sharing' },
    ],
    'Termos de Convênio': [
      { titulo: 'TERMO DE CONVÊNIO - 2023', link: 'https://drive.google.com/file/d/13cfnWMIO4q9VDincc9FrxBpS_LY0xl2V/view?usp=sharing' },
    ],
    'Políticas e Regulamentos': [
      { titulo: 'REGULAMENTO DE COMPRAS - 2023', link: 'https://drive.google.com/file/d/1vRbRe-kgfH_ZktegxJvGQe3XQt-Wr7RH/view?usp=sharing' },
    ],
    'Outros': [
      { titulo: 'AUTORIZAÇÃO CAPTAÇÃO DE RECURSOS - 2023', link: 'https://drive.google.com/file/d/1rmyglMRgigWh9grhAyypdMdVToG8cALC/view?usp=sharing' },
    ],
  },
  2022: {
    'Relatórios': [
      { titulo: 'RELATÓRIO EXECUTIVO - 2022', link: 'https://drive.google.com/file/d/13AcTdwZr2HzF8LtFucacJ5DLIOf1_eNx/view?usp=sharing' },
    ],
    'Financeiro': [
      { titulo: 'BALANÇO - 2022', link: 'https://drive.google.com/file/d/1xADMx3TJTYRRvyh-c4dadCx_ph6jnqgO/view?usp=sharing' },
      { titulo: 'BALANCETE - 2022', link: 'https://drive.google.com/file/d/1an-7fjlJZ11OZRFVZdRBq2OqgYEIRpMC/view?usp=sharing' },
    ],
    'Termos de Fomento': [
      { titulo: 'TERMO DE FOMENTO - VAMOSIMBORA? - 2022', link: 'https://drive.google.com/file/d/19cwQpESFd44Sce6CDSUz9L78wIF_19Dp/view?usp=sharing' },
    ],
  },
  2021: {
    'Relatórios': [
      { titulo: 'RELATÓRIO EXECUTIVO - 2021', link: 'https://drive.google.com/file/d/1U_saC2n3qxLKgXKTwykTCXLYMWvoG8MJ/view?usp=sharing' },
    ],
    'Financeiro': [
      { titulo: 'BALANCETE - 2021', link: 'https://drive.google.com/file/d/1jc13RpPucq9XXbqFRrfdlkF_SIIyljDq/view?usp=sharing' },
    ],
  },
  2020: {
    'Financeiro': [
      { titulo: 'BALANCETE - 2020', link: 'https://drive.google.com/file/d/1BK2K-pN6aTzv2DoY4JdMsGQyQaXvOs-e/view?usp=sharing' },
    ],
  },
};

function getInitials(nome) {
  return nome
    .split(' ')
    .filter((p) => p.length > 2)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();
}

function MembroCard({ nome, cargo, foto }) {
  return (
    <div className="tp-membro-card">
      {foto ? (
        <img src={foto} alt={nome} className="tp-membro-foto" />
      ) : (
        <div className="tp-membro-placeholder">
          <span className="tp-membro-iniciais">{getInitials(nome)}</span>
        </div>
      )}
      <div className="tp-membro-info">
        <h3>{nome}</h3>
        {cargo && <p>{cargo}</p>}
      </div>
    </div>
  );
}

function Transparencia() {
  const [anoAtivo, setAnoAtivo] = useState(null);

  const anos = Object.keys(documentosPorAno).map(Number).sort((a, b) => b - a);

  const toggleAno = (ano) => {
    setAnoAtivo((prev) => (prev === ano ? null : ano));
  };

  return (
    <>
      <Navbar />
      <main className="tp-page">

        {/* ── SEÇÃO 1: DIRETORIA ── */}
        <section className="tp-section" id="diretoria-section">
          <div className="tp-section-header">
            <h2 className="tp-titulo-secao">Nossa Diretoria</h2>
            <p className="tp-subtitulo-secao">
              Conheça as pessoas que conduzem nossa missão social
            </p>
          </div>

          <div className="tp-grupo-label">Diretoria Executiva</div>
          <div className="tp-membros-grid">
            {diretoria.map((m) => (
              <MembroCard key={m.nome} {...m} />
            ))}
          </div>

          <div className="tp-grupo-label">Conselho Fiscal</div>
          <div className="tp-membros-grid tp-membros-grid--conselho">
            {conselhoFiscal.map((m) => (
              <MembroCard key={m.nome} {...m} />
            ))}
          </div>
        </section>

        <div className="tp-divisor" />

        {/* ── SEÇÃO 2: DOCUMENTOS ── */}
        <section className="tp-section">
          <div className="tp-section-header">
            <h2 className="tp-titulo-secao">Nossos Relatórios</h2>
            <p className="tp-subtitulo-secao">
              Acesse nossas publicações, termos e documentos institucionais
            </p>
          </div>

          <div className="tp-anos-grid">
            {anos.map((ano) => (
              <button
                key={ano}
                className={`tp-ano-card${anoAtivo === ano ? ' tp-ano-card--ativo' : ''}`}
                onClick={() => toggleAno(ano)}
                aria-expanded={anoAtivo === ano}
              >
                <span className="tp-ano-numero">{ano}</span>
                <span className="tp-ano-icone">
                  {anoAtivo === ano ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
            ))}
          </div>

          {anoAtivo && (
            <div className="tp-dropdown" key={anoAtivo}>
              <div className="tp-dropdown-titulo">{anoAtivo}</div>
              {Object.entries(documentosPorAno[anoAtivo]).map(([categoria, docs]) => (
                <div key={categoria} className="tp-categoria-bloco">
                  <div className="tp-categoria-label">{categoria}</div>
                  <div className="tp-docs-lista">
                    {docs.map((doc) => (
                      <a
                        key={doc.link}
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tp-doc-link"
                      >
                        <FaExternalLinkAlt className="tp-doc-icone" />
                        <span>{doc.titulo}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Transparencia;
