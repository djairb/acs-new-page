import React, { useState } from 'react';
import '../../style/style.css';
import Navbar from '../../componentes/nav';
import Footer from '../../componentes/folter';
import { boletimData2024, boletimData2023 } from '../../dados/data-boletim';

boletimData2023.reverse();
boletimData2024.reverse();

function Transparencia() {

  
  const [selectedValue, setSelectedValue] = useState('2024');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const selectedData = selectedValue === '2024' ? boletimData2024 : boletimData2023;


  

  return (
    <>

      <Navbar />

      <main className='mainBoletim'>

      <div id= "transparencia" class="transparencia">
            <h2>Transparência e Publicações</h2>

			<h2>2019</h2>
                    
            <a href="https://drive.google.com/file/d/1U9QO-bd2EJp_cp9T6xL_f9DTQ2_aPP5C/view?usp=sharing">       

                <h3>2019: Relatório Financeiro</h3>

            </a>

            <a href="https://drive.google.com/file/d/1tPhv4mO_LeqxJsVtN7UQ1rAnanb4SG8H/view?usp=sharing">       

                <h3>2019: Relatório Executivo</h3>

            </a>

			<h2>2020</h2>

            <a href="https://drive.google.com/file/d/1lK16EQxsHs27eXQu4TfB2ddTlv_qian2/view?usp=sharing">       

                <h3>2020: Relatório Financeiro</h3>

            </a>

            <a href="https://drive.google.com/file/d/1vjSBGZlZsRIluKOi1B0otgv8JId0YcGU/view">       

                <h3>2020: Relatório Executivo</h3>

            </a>

			<h2>2021</h2>

            <a href="https://drive.google.com/file/d/1FbXWnlNQZjVu__QfzVNgioOi0IOxNDcM/view">       

                <h3>2021: Relatório Financeiro</h3>

            </a>

            <a href="https://drive.google.com/file/d/1ekg4tqNsttWREkgLtfi3OFsvSs89dVnN/view">       

                <h3>2021: Relatório Executivo</h3>

            </a>

			<h2>2022</h2>

			<a href="https://drive.google.com/file/d/1M9LZ2nGbK7vgr31vx5_6XipOQvt-iq1D/view?usp=sharing">       

                <h3>2022: Termo de Fomento - Projeto 'VamoSimbora?'</h3>

            </a>
			
            <a href="https://drive.google.com/file/d/1q8Vsn9nVWjyCjG0NWrVxfM8v9lBF2kj-/view">       

                <h3>2022: Relatório Executivo</h3>

            </a>

            <a href="https://drive.google.com/file/d/1U5QS_3An14NQwTZ9h5BeR5C3lAEsKHM_/view">       

                <h3>2022: Termo de Fomento N° 002-2022-1</h3>

            </a>

            <a href="https://drive.google.com/file/d/1nVNU-D8f6VVnGP6sORMzAYQLdLNdrnvt/view">       

                <h3>2022: Regimento Interno</h3>

            </a>

			<h2>2023</h2>            

            <a href="https://drive.google.com/file/d/1mQ8UXFeEJ9v4ZkTAfgYEH7R6GD8O-3AD/view?usp=sharing">       

                <h3>2023: Relatório Anual de Impacto</h3>

            </a>
			
			<a href="https://drive.google.com/file/d/1HY_tMmoF4KHDTk4MfPibIDuGnNJk09_x/view?usp=sharing">       

                <h3>2023: Termo de Fomento - Projeto Oportunizar Comunidade Rural</h3>

            </a>

			<a href="https://drive.google.com/file/d/1kgtMTa652aEFMTv3GzhhtgGpGSQ2qV3e/view?usp=sharing">       

                <h3>2023: Termo de Convênio - Projeto Oportunizar Comunidade</h3>

            </a>

			<a href="https://drive.google.com/file/d/1p8r68qCSi15IfMOAscudvC7Arq4GkUu7/view?usp=sharing">       

                <h3>2023: Termo de Fomento Projeto Conecta Vidas</h3>

            </a>

            <a href="https://drive.google.com/file/d/17-pyJbR757ZkV_Y7_O4rGV4p0HEUWWBE/view?usp=sharing">       

                <h3>2023: Regulamento De Compras</h3>

            </a>

            <a href="https://drive.google.com/drive/u/0/folders/1MryhMIDFvhkpV7-NjW5hzVyJDOYswCg6">       

                <h3>2023: Comissão Permanente</h3>

            </a>
			
			<a href="https://drive.google.com/file/d/13-2Mne7FV0NGZ7YiNVa5I16WD4t_rOpl/view?usp=sharing">       

                <h3>2023: Autorização de Capacitação - Projeto Passaporte Sem Fronteiras</h3>

            </a>

			<a href="https://drive.google.com/file/d/1YJ2hVpsUe5yw5wPIv-mwWM1cui6Cz7uq/view?usp=sharing">       

                <h3>Política de Voluntariado da Conexão Social</h3>

            </a>

            <h2>2024</h2>            

            <a href="https://drive.google.com/file/d/1x-jM8F3qdjxATp67e66xtI37MAlzvMxD/view?usp=sharing">       

                <h3>2024: 1° TERMO ADITIVO - TERMO DE FOMENTO - PROJETO CONECTA VIDAS</h3>

            </a>

            <a href="https://drive.google.com/file/d/18KnqA2WFIeJIDiXdq13gbUpAEgx-4c3e/view?usp=sharing">       

                <h3>2024: TERMO DE FOMENTO N 003.2024</h3>

            </a>

            <a href="https://drive.google.com/file/d/16K_676vq3KIVSCOBz6XjfMuycEnOs0QC/view?usp=sharing">       

                <h3>2024: TERMO DE FOMENTO - PROJETO CONECTA VIDAS</h3>

            </a>

            <a href="https://drive.google.com/file/d/1CVLtgvjBKVF8yqtuHY9kGgzgkl-Mgxh5/view?usp=sharing">       

                <h3>2024: TERMO DE FOMENTO - PROJETO VAMOSIMBORA?</h3>

            </a>

            <a href="https://drive.google.com/file/d/1njvJm8yVPwZEJx72TC_fgGCQZ6cOLuJV/view?usp=sharing">       

                <h3>2024: TERMO DE FOMENTO N° 009/2024</h3>

            </a>			

            <h2>Editais e Publicações</h2>

            

            <a href="https://drive.google.com/file/d/1of4pAB6AK_v73rrDCYcl0pDTnKAssYA9/view?usp=sharing">       

                <h3>Edital Eleição Administrativa</h3>

            </a>

            <a href="https://drive.google.com/file/d/12izhiG5p_676Fzjn7z4tffLosYrRMGbu/view?usp=sharing">       

                <h3>Comissão Permanente Compras 2024</h3>

            </a>

            <a href="https://drive.google.com/file/d/1VmEOQ-3-K95TZNJCpGDB6Ad2FP4VaZx0/view">       

                <h3>Seleção Simplificada Chamada N° 01/2023 - Profissional de Comunicação Social</h3>

            </a>

			<a href="https://drive.google.com/file/d/1WbvKtdHyx0JWQNdX71W0ulrGBwkb8dSC/view?usp=sharing">       

                <h3>Seleção Simplificada Chamada N° 02/2023 - Profissionais de Tecnologia da informação</h3>

            </a>

			<a href="https://drive.google.com/file/d/1-cdfA-24tJiC9oVlBFY4VocZpI31VWVq/view?usp=sharing">       

                <h3>Resultado da Seleção Simplificada Chamada N° 02/2023 - Profissionais de Tecnologia da informação</h3>

            </a>					

            
        </div>
        
        

      </main>

      <Footer />

    </>
  );
}

export default Transparencia;
