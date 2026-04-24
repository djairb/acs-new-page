import './App.css';
import Rotas from './rotas';
import { useEffect } from 'react';

function App() {

  // Scroll-reveal global: adiciona .reveal a seções e anima ao entrar na viewport
  useEffect(() => {
    const targets = document.querySelectorAll(
      'section, .divNoticiasHome, .projeto-container, ' +
      '.missao-visao-valores-section, .parceirosSection, ' +
      '.visita-section, .projetos-section, .projetos-section2, ' +
      '.videoCard, .containerCardNoticiaHome'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    targets.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Rotas/>
    </div>
  );
}

export default App;
