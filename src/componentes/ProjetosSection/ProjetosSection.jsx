import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projetos.css';

// Dados simulados (Idealmente viriam do seu arquivo dados-missao ou API)
import { meusProjetos } from '../../dados/data-projeto-novo';

const ProjetosSection = () => {
  return (
    <section className="projetos-section">
      <div className="projetos-header">
        <h2>Nossos Projetos</h2>
      </div>
      
      <div className="projetos-grid">
        {meusProjetos.map((projeto) => (
          <ProjectCard key={projeto.id} data={projeto} />
        ))}
      </div>
    </section>
  );
};

export default ProjetosSection;