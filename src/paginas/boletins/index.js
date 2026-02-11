import React, { useState } from 'react';
import '../../style/style.css';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';

import { 
  boletimData2023Inverse, 
  boletimData2024Inverse, 
  boletimData2025Inverse,
  boletimData2026Inverse
} from '../../dados/data-boletim';

function Boletins() {

  // 🔹 Ano padrão
  const [selectedValue, setSelectedValue] = useState('2026');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // 🔹 Mapeamento dos boletins por ano
  const boletinsPorAno = {
    2026: boletimData2026Inverse,
    2025: boletimData2025Inverse,
    2024: boletimData2024Inverse,
    2023: boletimData2023Inverse,
  };

  const selectedData = boletinsPorAno[selectedValue] || [];

  return (
    <>
      <Navbar />

      <main className="mainBoletim">

        <select
          className="selectBoletim"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="2026">Boletins 2026</option>
          <option value="2025">Boletins 2025</option>
          <option value="2024">Boletins 2024</option>
          <option value="2023">Boletins 2023</option>
        </select>

        <section className="boletimSection">
          {selectedData.map((item, index) => (
            <React.Fragment key={index}>
              <h1>{item.title}</h1>

              <iframe
                src={item.link}
                width="80%"
                height="500px"
                title={item.title}
              />

              <div className="spaceLine"></div>
            </React.Fragment>
          ))}
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Boletins;
