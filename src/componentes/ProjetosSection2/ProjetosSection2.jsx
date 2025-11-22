import React from 'react';
// Importando o Card Simples (Verifique se o caminho '../CardSimples/CardSimples' está correto na sua pasta)
import CardSimples from '../CardSimples/CardSimples'; 
import './Projetos2.css'; // Reutilizando o CSS da grid

// Importando a lista correta que você me mandou
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
          /* Passando o objeto inteiro 'item' para a prop 'data' */
          <CardSimples key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default ProjetosSection2;