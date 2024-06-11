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

        <header>           

            <Link to="/"><img  src={logo} alt="" /></Link>
             <nav ref={navRef}>

                <Link to="/boletins-informativos">Boletins Informativos</Link>

                <Link to="/transparencia">Transparência</Link>
        
        
                <button className= "nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>                
                </button>          

             </nav>
             <button className= "nav-btn" onClick={showNavBar}>
                <FaBars/>                
            </button>     



        </header>
    );
}

export default Navbar;