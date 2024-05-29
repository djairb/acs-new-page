import { useContext, useRef, useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";


import logo from "../../img/mainHome/acsLogo.jpg";
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

            <Link to="/"><img  src={logo} alt="logo-techFest" /></Link>
             <nav ref={navRef}>

                <Link to="/tela-todos-palestra">Transparência</Link>
        
        
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