import { useContext, useRef, useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";


import logo from "../../img/logoAcs.png";

import { Link, useNavigate } from "react-router-dom";

function Navbar(){
    

    //user ta setado como padrão  - massa

    const navigate = useNavigate();

    const navRef = useRef();

    const showNavBar = () => {

        navRef.current.classList.toggle("responsive_nav");       
    }   

    return (

        <>

        <header>           

            <Link to="/"><img  src={logo} alt="" /></Link>
             <nav ref={navRef}>

                <Link to="/quem-somos">Quem Somos</Link>

                <Link to="/boletins-informativos">Boletins</Link>

                <Link to="/transparencia">Transparência</Link>

                <Link to="/noticias">Blog Rebeca</Link>
                {/* <Link to="/galeria">Galeria</Link> */}

          
                <a href="https://somosconexaosocial.org/sra" rel="noopener noreferrer">SRA</a>

                

        
                <button className= "nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>                
                </button>          

             </nav>
             <button className= "nav-btn" onClick={showNavBar}>
                <FaBars/>                
            </button>     

        

        </header>

        <div className='spaceLineNav'></div>

        </>

        
    );
}

export default Navbar;