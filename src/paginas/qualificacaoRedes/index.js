// import React, { useState, useEffect } from 'react';
// import cardInscricaoDesktop from "../../img/cardInscricao/seletivo.jpg";
// import cardInscricaoMobile from "../../img/cardInscricao/seletivo-pq.jpg";
// import { Link } from 'react-router-dom';
// import Navbar from '../../componentes/nav';
// import Footer from '../../componentes/folter';


// function QualificacaoRedes() {

//     const [imageSrc, setImageSrc] = useState(cardInscricaoDesktop);

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth <= 768) {
//                 setImageSrc(cardInscricaoMobile); // imagem mobile
//             } else {
//                 setImageSrc(cardInscricaoDesktop); // imagem desktop
//             }
//         };

//         // Adiciona o event listener e executa a verificação inicial
//         window.addEventListener('resize', handleResize);
//         handleResize();

//         // Limpa o event listener ao desmontar o componente
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);
   

//     return (

//         <>

//         <Navbar />

//         <div className='spaceLineNav'></div>

//         <main className='mainInscricao'>

//             <img src={imageSrc} alt="Inscrição" />

//             <h1>PROCESSO SELETIVO PARA CURSO DE QUALIFICAÇÃO EM SUPORTE DE REDES</h1>

//             <h1>PROCESSO SELETIVO PARA CURSO DE QUALIFICAÇÃO EM SUPORTE DE REDES</h1>

//             <h1>PROCESSO SELETIVO PARA CURSO DE QUALIFICAÇÃO EM SUPORTE DE REDES</h1>

//             <h1>PROCESSO SELETIVO PARA CURSO DE QUALIFICAÇÃO EM SUPORTE DE REDES</h1>

//             <h1>PROCESSO SELETIVO PARA CURSO DE QUALIFICAÇÃO EM SUPORTE DE REDES</h1>

        


                


//         </main>


//         <Footer />
        
        
        
//         </>

        
        
    
//     );
// }

// export default QualificacaoRedes;
