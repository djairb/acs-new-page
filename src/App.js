import './App.css';
import Rotas from './rotas';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
    
    // Recalcula as posições após a renderização inicial (resolve problema de surgirem todos de uma vez)
    setTimeout(() => {
      AOS.refresh();
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Rotas/>
    </div>
  );
}

export default App;
