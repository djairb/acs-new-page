import './App.css';
import Rotas from './rotas';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    const jaMostrado = sessionStorage.getItem("popupMostrado");

    const initAOS = () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: false,
        offset: 100,
      });
      setTimeout(() => AOS.refresh(), 1000);
    };

    if (jaMostrado) {
      // Se o popup não vai aparecer, inicia imediatamente
      initAOS();
    } else {
      // Se o popup vai aparecer, aguarda o evento customizado
      window.addEventListener('iniciarAOS', initAOS, { once: true });
    }
  }, []);

  return (
    <div className="App">
      <Rotas/>
    </div>
  );
}

export default App;
