import { useContext, useRef, useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";


import logo from "../../img/mainHome/acsLogo.jpg";
import { Link, useNavigate } from "react-router-dom";

function Navbar(){
    

    //user ta setado como padrão

    const navigate = useNavigate();

    const navRef = useRef();

    const showNavBar = () => {

        navRef.current.classList.toggle("responsive_nav");
        
    }   

    return (

        <header>           

            <Link to="/"><img  src={logo} alt="logo-techFest" /></Link>
             <nav ref={navRef}>

                <Link to="/tela-todos-palestra">Palestras</Link>

                <Link to="/tela-todos-oficina">Oficinas</Link>

                <Link to="/tela-todos-stands">Stands</Link>

                <Link to="/tela-todos-game">Disputas de Games</Link>

                <Link to="/tela-todos-apresentacao">Apresentações Culturais</Link>

                <Link to="/tela-todos-show">Shows</Link>         
        
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