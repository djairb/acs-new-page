import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import '../ProjetosSection/Projetos.css'; // Estilos do card completo (carrossel + expansão)
import './Projetos2.css'; // Estilos da seção de encerrados

// Projetos com ciclo de atividades encerrado
import { destaquesOuParcerias } from '../../dados/data-projeto-novo';

const ProjetosSection2 = () => {
  return (
    <section className="projetos-section2">
      <div className="projetos-header2">
        {/* Pode alterar o título conforme a necessidade */}
        <h2>Ciclos de Atividades Encerradas</h2>
      </div>

      <div className="projetos-grid2">
        {destaquesOuParcerias.map((item) => (
          <ProjectCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default ProjetosSection2;
