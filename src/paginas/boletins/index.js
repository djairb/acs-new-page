import React, { useState } from 'react';
import '../../style/style.css';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';


import { boletimData2023Inverse, boletimData2024Inverse, boletimData2025Inverse } from '../../dados/data-boletim';



function Boletins() {

  
  const [selectedValue, setSelectedValue] = useState('2025');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const selectedData = selectedValue === '2025' 
  ? boletimData2025Inverse 
  : selectedValue === '2024' 
  ? boletimData2024Inverse 
  : boletimData2023Inverse;
  

  return (
    <>

      <Navbar />

      <main className='mainBoletim'>
        
        <div className="spaceLineNav"></div>

        <select className='selectBoletim' value={selectedValue} onChange={handleSelectChange}>

          <option value="2025">Boletins 2025</option>
          <option value="2024">Boletins 2024</option>
          <option value="2023">Boletins 2023</option>

        </select>

        <section className="boletimSection">

          {selectedData.map((item) => (

            <>

              <h1>{item.title}</h1>
              <iframe src={item.link} width="80%" height="500px"></iframe>
              
              <div className="spaceLine"></div>

            </>

          ))}

        </section>

      </main>

      <Footer />

    </>
  );
}

export default Boletins;
